'use client';

import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/lib/types';
import { Search } from 'lucide-react';

interface Props {
  initialProjects: Project[];
}

export const ProjectsList = ({ initialProjects }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Lógica de filtrado: Busca por título O por tecnologías
  const filteredProjects = initialProjects.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(query);
    // Revisamos si alguna tecnología del array coincide con la búsqueda
    const matchesTech = project.technologies.some((tech) =>
      tech.toLowerCase().includes(query)
    );
    return matchesTitle || matchesTech;
  });

  return (
    <div>
      {/* Barra de Búsqueda */}
      <div className="max-w-md mx-auto mb-12 relative animate-fade-in-up">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-full leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm hover:shadow-md"
          placeholder="Buscar por nombre o tecnología (ej: React, .NET)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Resultados */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <div className="inline-block p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No se encontraron proyectos</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Intenta con otra palabra clave o tecnología.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
    </div>
  );
};