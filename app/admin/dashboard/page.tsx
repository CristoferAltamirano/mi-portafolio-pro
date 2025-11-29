'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
// Importamos el icono de Lápiz (Pencil)
import { Plus, Trash2, ExternalLink, Pencil } from 'lucide-react';
import { Project } from '@/lib/types';

export default function Dashboard() {
  const [projects, setProjects] = useState<any[]>([]); // Usamos any para simplificar el _id

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(setProjects);
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este proyecto?')) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter(p => p._id !== id));
        alert('Proyecto eliminado');
      }
    } catch (error) {
      alert('Error al eliminar');
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Panel de Control</h1>
        <Link 
          href="/admin/upload" 
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" /> Nuevo Proyecto
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Título</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300 hidden md:table-cell">Tecnologías</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {projects.map((project) => (
              <tr key={project._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">{project.title}</td>
                <td className="p-4 text-gray-500 dark:text-gray-400 hidden md:table-cell">
                  {project.technologies.join(', ').substring(0, 50)}...
                </td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <a href={project.link} target="_blank" className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full" title="Ver Link">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  
                  {/* BOTÓN EDITAR */}
                  <Link 
                    href={`/admin/edit/${project._id}`}
                    className="p-2 text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-full transition-colors"
                    title="Editar"
                  >
                    <Pencil className="w-5 h-5" />
                  </Link>

                  {/* BOTÓN ELIMINAR */}
                  <button 
                    onClick={() => handleDelete(project._id)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    title="Eliminar"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}