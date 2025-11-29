'use client';

import { Briefcase, GraduationCap, Calendar, Download } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Trayectoria
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Mi camino profesional y académico hasta el momento.
        </p>

        {/* Botón de Descarga de CV */}
        <a 
          href="/cv.pdf" // Asegúrate de poner tu archivo 'cv.pdf' en la carpeta 'public'
          download="CV_Cristofer_Altamirano.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-full font-semibold shadow-sm hover:shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5"
        >
          <Download className="w-5 h-5" />
          Descargar Currículum
        </a>
      </div>

      <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-4 md:ml-6 space-y-12">
        
        {/* Experiencia 1: Microactiva */}
        <div className="relative pl-8 md:pl-12 group">
          {/* Icono del Timeline */}
          <div className="absolute -left-[11px] top-0 p-1 bg-white dark:bg-gray-900 border-2 border-indigo-600 rounded-full">
            <Briefcase className="w-3 h-3 text-indigo-600" />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
              Desarrollador Web (Práctica Profesional)
            </h3>
            <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0">
              <Calendar className="w-3 h-3 mr-1" />
              2025
            </span>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Microactiva SPA
          </h4>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Encargado del desarrollo full stack de sistemas de gestión para optimizar procesos internos.
          </p>
          
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-sm">
            <li>Desarrollo de sistema web para la gestión de gastos comunes.</li>
            <li>Conexión a bases de datos y diseño de interfaces responsivas.</li>
            <li>Implementación de migraciones y optimización de procesos.</li>
          </ul>
        </div>

        {/* Educación: CFT */}
        <div className="relative pl-8 md:pl-12 group">
          <div className="absolute -left-[11px] top-0 p-1 bg-white dark:bg-gray-900 border-2 border-gray-400 dark:border-gray-600 rounded-full">
            <GraduationCap className="w-3 h-3 text-gray-500 dark:text-gray-400" />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
              Técnico Nivel Superior en Informática
            </h3>
            <span className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 sm:mt-0">
              <Calendar className="w-3 h-3 mr-1" />
              2025 (Titulado)
            </span>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            CFT Teodoro Wickel Klüwen
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Titulado con distinción.
          </p>
        </div>

      </div>
    </section>
  );
};