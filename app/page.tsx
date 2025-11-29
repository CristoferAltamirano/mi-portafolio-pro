import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
// Importamos la conexión a la DB y el Modelo
import connectDB from '@/lib/mongodb';
import ProjectModel from '@/models/Project';
import { projectsData as staticProjects } from '@/lib/data';

// Función para obtener proyectos de la base de datos
async function getProjects() {
  try {
    await connectDB();
    // Buscamos todos los proyectos, ordenados por los más nuevos primero
    const projects = await ProjectModel.find({}).sort({ createdAt: -1 }).lean();
    
    // Transformamos los datos de MongoDB para que sean compatibles con nuestro componente
    // (Convertimos _id a string y aseguramos que images sea un array)
    return projects.map((p: any) => ({
      id: p._id.toString(),
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      link: p.link,
      demoLink: p.demoLink,
      // Priorizamos el array de imágenes, si no existe usamos imageUrl (retrocompatibilidad)
      images: p.images && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []),
      imageUrl: p.imageUrl || (p.images && p.images[0]) || ''
    }));
  } catch (error) {
    console.error("Error cargando proyectos de DB:", error);
    return [];
  }
}

export default async function Home() {
  // 1. Intentamos cargar proyectos de la base de datos
  const dbProjects = await getProjects();

  // 2. Combinamos: Si hay proyectos en DB los mostramos, si no, mostramos los estáticos de prueba
  // Esto es útil para que tu portafolio no se vea vacío mientras lo llenas.
  const displayProjects = dbProjects.length > 0 ? dbProjects : staticProjects;

  return (
    <div className="flex flex-col gap-0 min-h-screen relative">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />

      <section id="projects" className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Portafolio versátil que abarca desde desarrollo empresarial con .NET y Java, hasta soluciones web modernas.
          </p>
        </div>
        
        {/* Renderizamos los proyectos (dinámicos o estáticos) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="/projects" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
             Ver todos los proyectos →
           </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}