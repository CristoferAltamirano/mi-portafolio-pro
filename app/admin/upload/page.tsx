import { ProjectForm } from '@/components/admin/ProjectForm';

export default function UploadPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Panel de Administración</h1>
          <p className="text-gray-600 dark:text-gray-400">Sube tus nuevos proyectos al portafolio.</p>
        </div>
        
        <ProjectForm />
      </div>
    </div>
  );
}