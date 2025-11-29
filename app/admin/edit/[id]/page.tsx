import connectDB from '@/lib/mongodb';
import ProjectModel from '@/models/Project';
import { ProjectForm } from '@/components/admin/ProjectForm';

// Definimos el tipo de Props para Next.js 15 (params es una Promesa)
interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPage({ params }: Props) {
  // 1. CORRECCIÓN CRÍTICA: Esperamos a que params se resuelva para obtener el ID
  const { id } = await params;

  await connectDB();
  
  // 2. Buscamos el proyecto usando el ID correcto
  const project = await ProjectModel.findById(id).lean();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Proyecto no encontrado</h1>
          <p className="text-gray-400">No se pudo encontrar el ID solicitado.</p>
        </div>
      </div>
    );
  }

  // 3. Serializamos los datos para pasarlos al componente cliente
  // (Convertimos _id y fechas a strings para que no den error en React)
  const serializedProject = {
    ...project,
    _id: project._id.toString(),
    createdAt: project.createdAt?.toString()
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <ProjectForm initialData={serializedProject as any} />
      </div>
    </div>
  );
}