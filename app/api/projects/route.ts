import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';

export async function POST(request: Request) {
  try {
    // 1. Conectar a la base de datos
    await connectDB();

    // 2. Obtener los datos del cuerpo de la petición (JSON)
    const body = await request.json();

    // 3. Validación básica (Opcional, pero recomendada)
    if (!body.title || !body.description) {
      return NextResponse.json(
        { error: 'El título y la descripción son obligatorios' },
        { status: 400 }
      );
    }

    // 4. Crear el nuevo proyecto en memoria
    const newProject = new Project(body);

    // 5. Guardarlo en MongoDB
    const savedProject = await newProject.save();

    // 6. Responder con éxito
    return NextResponse.json(savedProject, { status: 201 });

  } catch (error: any) {
    console.error('Error al crear proyecto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    // Obtener todos los proyectos ordenados por fecha (más nuevos primero)
    const projects = await Project.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Error al obtener proyectos' },
      { status: 500 }
    );
  }
}