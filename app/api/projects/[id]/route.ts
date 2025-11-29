import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { revalidatePath } from 'next/cache'; // Importante para actualizar la vista

// Definimos el tipo correcto para Next.js 15
interface RouteParams {
  params: Promise<{ id: string }>;
}

// DELETE: Eliminar un proyecto
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params; // <--- CORRECCIÓN: Esperamos el ID
    await connectDB();
    
    const deletedProject = await Project.findByIdAndDelete(id);
    
    if (!deletedProject) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 });
    }

    // Limpiamos la caché para que desaparezca de la lista inmediatamente
    revalidatePath('/');
    revalidatePath('/projects');
    revalidatePath('/admin/dashboard');

    return NextResponse.json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}

// PUT: Editar un proyecto
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params; // <--- CORRECCIÓN: Esperamos el ID
    await connectDB();
    
    const body = await request.json();
    
    // { new: true } hace que nos devuelva el objeto YA actualizado
    const updatedProject = await Project.findByIdAndUpdate(id, body, { new: true });
    
    if (!updatedProject) {
        return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 });
    }

    // Limpiamos la caché para ver los cambios al instante
    revalidatePath('/');
    revalidatePath('/projects');
    revalidatePath('/admin/dashboard');
    
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}