// 1. IMPORTACIONES
// Asegúrate que la ruta coincida con tu estructura real (según el video era sections)
import { ProjectCard } from '@/components/ui/ProjectCard'; 
import { projectsData as staticProjects } from '@/lib/data';
import connectDB from '@/lib/mongodb';
import ProjectModel from '@/models/Project';
import { Sparkles, Code2 } from 'lucide-react';

// 2. LÓGICA DE DATOS (Exactamente la tuya, intacta)
async function getProjects() {
  try {
    await connectDB();
    const projects = await ProjectModel.find({}).sort({ createdAt: -1 }).lean();
    
    return projects.map((p: any) => ({
      id: p._id.toString(),
      title: p.title,
      description: p.description,
      technologies: p.technologies || [], // Aseguramos que sea array
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
  // Obtenemos datos
  const dbProjects = await getProjects();
  const displayProjects = dbProjects.length > 0 ? dbProjects : staticProjects;

  return (
    <main className="relative min-h-screen bg-neutral-950 pt-32 pb-20 overflow-hidden">
      
      {/* 3. FONDO AMBIENTAL (La magia visual) */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        {/* Rejilla técnica (Tailwind v4 syntax) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />
        
        {/* Luces de ambiente */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4. HEADER DE LA SECCIÓN (Con estilo) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Badge decorativo */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-3 h-3" />
            <span>Galería de Código</span>
          </div>
          
          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Portafolio <br className="md:hidden" />
            {/* Gradiente de texto Tailwind v4 */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Completo
            </span>
          </h1>
          
          <p className="text-lg text-neutral-400 leading-relaxed">
            Una inmersión profunda en mis desarrollos. Desde sistemas ERP empresariales robustos 
            hasta experiencias web interactivas y modernas.
          </p>
        </div>

        {/* 5. GRID DE PROYECTOS */}
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {displayProjects.map((project, index) => (
              <div key={project.id || index} className="h-full">
                {/* Aquí renderizamos tu tarjeta que ya está estilizada */}
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          // Estado Vacío (Diseñado, no texto plano)
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5 text-center">
            <div className="p-4 bg-white/5 rounded-full mb-4">
              <Code2 className="w-8 h-8 text-neutral-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Aún no hay proyectos</h3>
            <p className="text-neutral-400 max-w-md">
              Estamos trabajando en cargar el contenido. Vuelve pronto para ver las novedades.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}