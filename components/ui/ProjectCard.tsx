'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/lib/types';
import { 
  Github, ExternalLink, ChevronLeft, ChevronRight, X, // Importamos X para cerrar
  Code2, Database, Server, Layout, Globe, Cpu, Layers, Braces, 
  Terminal, FileCode, Palette, Workflow, Cloud, Container 
} from 'lucide-react';

interface Props {
  project: Project;
}

// Diccionario de Iconos (Igual que antes)
const getTechIcon = (techName: string) => {
  const name = techName.toLowerCase();
  if (name.includes('react')) return <Layout className="w-4 h-4 text-blue-400" />;
  if (name.includes('next')) return <Globe className="w-4 h-4 text-black dark:text-white" />;
  if (name.includes('angular')) return <Globe className="w-4 h-4 text-red-500" />;
  if (name.includes('node')) return <Workflow className="w-4 h-4 text-green-500" />;
  if (name.includes('typescript')) return <FileCode className="w-4 h-4 text-blue-500" />;
  if (name.includes('javascript') || name.includes('js')) return <Code2 className="w-4 h-4 text-yellow-500" />;
  if (name.includes('laravel')) return <Layers className="w-4 h-4 text-red-600" />;
  if (name.includes('php')) return <Code2 className="w-4 h-4 text-purple-400" />;
  if (name.includes('net') || name.includes('c#')) return <Server className="w-4 h-4 text-purple-600" />;
  if (name.includes('java')) return <Cpu className="w-4 h-4 text-orange-500" />;
  if (name.includes('tailwind')) return <Palette className="w-4 h-4 text-cyan-400" />;
  if (name.includes('css') || name.includes('bootstrap')) return <Layout className="w-4 h-4 text-blue-600" />;
  if (name.includes('mongo')) return <Database className="w-4 h-4 text-green-600" />;
  if (name.includes('sql')) return <Database className="w-4 h-4 text-blue-400" />;
  if (name.includes('docker')) return <Container className="w-4 h-4 text-blue-500" />;
  if (name.includes('git')) return <Terminal className="w-4 h-4 text-orange-500" />;
  if (name.includes('vercel')) return <Cloud className="w-4 h-4" />;
  return <Code2 className="w-4 h-4 text-gray-400" />;
};

export const ProjectCard = ({ project }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Manejo de imágenes
  const images = project.images && project.images.length > 0 
    ? project.images 
    : (project.imageUrl ? [project.imageUrl] : []);

  const hasMultipleImages = images.length > 1;

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        
        {/* 1. Carrusel de Imágenes (Tarjeta) */}
        <div 
          className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-900 group/image cursor-zoom-in"
          onClick={() => setIsModalOpen(true)} // Abrir modal al hacer clic
        >
          {images.length > 0 ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={images[currentIndex]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
              />
              
              {/* Controles de navegación en la tarjeta (stopPropagation para no abrir modal al navegar) */}
              {hasMultipleImages && (
                <>
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70 focus:outline-none z-10">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70 focus:outline-none z-10">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {images.map((_, idx) => (
                      <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <Code2 className="w-12 h-12 opacity-20" />
            </div>
          )}
        </div>

        {/* 2. Contenido */}
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 6).map((tech) => (
              <div 
                key={tech} 
                className="p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-help group/icon relative"
                title={tech}
              >
                {getTechIcon(tech)}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                  {tech}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github className="w-4 h-4" /> Código
            </a>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors ml-auto">
                <ExternalLink className="w-4 h-4" /> Ver Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 3. MODAL (Lightbox) */}
      {isModalOpen && images.length > 0 && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Botón Cerrar */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Imagen Grande */}
          <div 
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic en la imagen
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[currentIndex]} 
              alt={project.title} 
              className="max-w-full max-h-full object-contain rounded shadow-2xl"
            />

            {/* Navegación del Modal */}
            {hasMultipleImages && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-12 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-12 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                </button>
                
                {/* Contador de fotos */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                  {currentIndex + 1} de {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};