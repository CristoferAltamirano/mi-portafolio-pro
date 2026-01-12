'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Necesitamos AnimatePresence para el modal
import { Project } from '@/lib/types';
import { 
  Github, ExternalLink, ChevronLeft, ChevronRight, X, 
  Code2, Database, Server, Layout, Globe, Cpu, Layers, 
  Terminal, FileCode, Palette, Workflow, Cloud, Container, Braces 
} from 'lucide-react';

interface Props {
  project: Project;
}

// Diccionario de Iconos (Estilizado para fondo oscuro)
const getTechIcon = (techName: string) => {
  const name = techName.toLowerCase();
  const iconClass = "w-4 h-4";
  
  if (name.includes('react')) return <Layout className={`${iconClass} text-sky-400`} />;
  if (name.includes('next')) return <Globe className={`${iconClass} text-white`} />;
  if (name.includes('angular')) return <Globe className={`${iconClass} text-red-500`} />;
  if (name.includes('node')) return <Workflow className={`${iconClass} text-emerald-500`} />;
  if (name.includes('typescript')) return <FileCode className={`${iconClass} text-blue-500`} />;
  if (name.includes('javascript') || name.includes('js')) return <Code2 className={`${iconClass} text-yellow-400`} />;
  if (name.includes('laravel')) return <Layers className={`${iconClass} text-red-600`} />;
  if (name.includes('php')) return <Code2 className={`${iconClass} text-violet-400`} />;
  if (name.includes('net') || name.includes('c#')) return <Server className={`${iconClass} text-purple-500`} />;
  if (name.includes('java')) return <Cpu className={`${iconClass} text-orange-500`} />;
  if (name.includes('tailwind')) return <Palette className={`${iconClass} text-cyan-300`} />;
  if (name.includes('mongo')) return <Database className={`${iconClass} text-green-500`} />;
  if (name.includes('sql')) return <Database className={`${iconClass} text-blue-300`} />;
  if (name.includes('docker')) return <Container className={`${iconClass} text-blue-500`} />;
  if (name.includes('git')) return <Terminal className={`${iconClass} text-orange-400`} />;
  if (name.includes('vercel')) return <Cloud className={`${iconClass} text-white`} />;
  return <Braces className={`${iconClass} text-gray-400`} />;
};

export const ProjectCard = ({ project }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Manejo de imágenes robusto
  const images = project.images && project.images.length > 0 
    ? project.images 
    : (project.imageUrl ? [project.imageUrl] : []);

  const hasMultipleImages = images.length > 1;

  // Bloquear scroll
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.preventDefault(); e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.preventDefault(); e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* TARJETA PRINCIPAL */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]"
      >
        
        {/* 1. Carrusel de Imágenes (Header) */}
        <div 
          className="relative h-52 w-full overflow-hidden cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Overlay gradiente para que la imagen se integre con la tarjeta oscura */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40 pointer-events-none" />

          {images.length > 0 ? (
            <div className="w-full h-full relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={images[currentIndex]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Navegación en tarjeta (Solo visible en hover) */}
              {hasMultipleImages && (
                <div className="absolute inset-0 z-20 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={prevImage} className="p-1.5 rounded-full bg-black/60 text-white hover:bg-indigo-600 transition-colors backdrop-blur-md">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextImage} className="p-1.5 rounded-full bg-black/60 text-white hover:bg-indigo-600 transition-colors backdrop-blur-md">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {/* Indicadores de posición (puntos) */}
              {hasMultipleImages && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {images.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-4 bg-indigo-500' : 'w-1 bg-white/50'}`} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full bg-neutral-800 text-neutral-600">
              <Code2 className="w-12 h-12 opacity-20" />
            </div>
          )}
        </div>

        {/* 2. Contenido */}
        <div className="flex flex-col flex-grow p-6 relative z-10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-neutral-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
            {project.description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 6).map((tech) => (
              <div 
                key={tech} 
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-neutral-300 hover:bg-white/10 hover:border-indigo-500/30 hover:text-white transition-all cursor-help"
                title={tech}
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Footer / Links */}
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" /> 
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                Código
              </span>
            </a>

            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 ml-auto transition-colors group/link"
              >
                <span>Ver Demo</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* 3. MODAL (Lightbox) con Animaciones */}
      <AnimatePresence>
        {isModalOpen && images.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/90 backdrop-blur-md p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 z-50 p-2 text-neutral-400 hover:text-white bg-black/20 hover:bg-white/10 rounded-full transition-all border border-white/5"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Contenedor de Imagen */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={images[currentIndex]} 
                alt={project.title} 
                className="max-w-full max-h-[85vh] object-contain"
              />

              {/* Controles del Modal */}
              {hasMultipleImages && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-indigo-600 backdrop-blur-md rounded-full transition-all border border-white/10 hover:border-indigo-500"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-indigo-600 backdrop-blur-md rounded-full transition-all border border-white/10 hover:border-indigo-500"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur text-white/80 text-sm font-medium border border-white/10">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};