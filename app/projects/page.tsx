import { ProjectCard } from '@/components/ui/ProjectCard';
import { projectsData as staticProjects } from '@/lib/data';
// Importamos la conexión a la DB
import connectDB from '@/lib/mongodb';
import ProjectModel from '@/models/Project';

// Reutilizamos la función para obtener proyectos (igual que en la Home)
async function getProjects() {
  try {
    await connectDB();
    const projects = await ProjectModel.find({}).sort({ createdAt: -1 }).lean();
    
    return projects.map((p: any) => ({
      id: p._id.toString(),
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      link: p.link,
      demoLink: p.demoLink,
      images: p.images && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []),
      imageUrl: p.imageUrl || (p.images && p.images[0]) || ''
    }));
  } catch (error) {
    console.error("Error cargando proyectos:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  // 1. Buscamos en la base de datos
  const dbProjects = await getProjects();

  // 2. Si hay datos en DB los usamos, si no, usamos los estáticos (fallback)
  const displayProjects = dbProjects.length > 0 ? dbProjects : staticProjects;

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Portafolio Completo
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Explora en detalle mis desarrollos. Desde sistemas ERP empresariales hasta aplicaciones web interactivas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}