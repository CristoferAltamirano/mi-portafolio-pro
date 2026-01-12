'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, ExternalLink, Pencil, LayoutGrid, List } from 'lucide-react';

export default function Dashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este proyecto? Esta acción no se puede deshacer.')) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter(p => p._id !== id));
      }
    } catch (error) {
      alert('Error al eliminar');
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 max-w-7xl mx-auto bg-neutral-950 text-white">
      
      {/* 1. HEADER DEL DASHBOARD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Panel de Control
          </h1>
          <p className="text-neutral-400 mt-1">Gestiona tu portafolio desde aquí.</p>
        </div>
        
        <Link 
          href="/admin/upload" 
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          <Plus className="w-5 h-5" /> 
          Nuevo Proyecto
        </Link>
      </div>

      {/* 2. TABLA DE PROYECTOS (Card Style) */}
      <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Loading State */}
        {isLoading && (
          <div className="p-12 text-center text-neutral-500">
            Cargando proyectos...
          </div>
        )}

        {/* Empty State */}
        {!isLoading && projects.length === 0 && (
          <div className="p-12 text-center text-neutral-500">
            No tienes proyectos aún. ¡Crea el primero!
          </div>
        )}

        {/* Tabla */}
        {!isLoading && projects.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/5 text-xs uppercase tracking-wider text-neutral-400">
                  <th className="p-5 font-medium">Proyecto</th>
                  <th className="p-5 font-medium hidden md:table-cell">Stack Tecnológico</th>
                  <th className="p-5 font-medium text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.map((project) => (
                  <tr key={project._id} className="group hover:bg-white/[0.02] transition-colors">
                    
                    {/* Columna Título */}
                    <td className="p-5">
                      <div className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1 truncate max-w-[200px]">
                        {project.description}
                      </div>
                    </td>

                    {/* Columna Tecnologías (Badges) */}
                    <td className="p-5 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech: string) => (
                          <span key={tech} className="px-2 py-0.5 rounded text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-neutral-800 text-neutral-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Columna Acciones */}
                    <td className="p-5">
                      <div className="flex justify-end gap-2">
                        {/* Ver */}
                        <a 
                          href={project.link} 
                          target="_blank" 
                          className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-indigo-500/20 hover:text-indigo-400 transition-all border border-transparent hover:border-indigo-500/30" 
                          title="Ver Repositorio"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        
                        {/* Editar */}
                        <Link 
                          href={`/admin/edit/${project._id}`}
                          className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-yellow-500/20 hover:text-yellow-400 transition-all border border-transparent hover:border-yellow-500/30"
                          title="Editar"
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>

                        {/* Eliminar */}
                        <button 
                          onClick={() => handleDelete(project._id)}
                          className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-red-500/20 hover:text-red-400 transition-all border border-transparent hover:border-red-500/30"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}