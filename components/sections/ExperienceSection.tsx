'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Download, ChevronRight } from 'lucide-react';

export const ExperienceSection = () => {
  
  // Datos estructurados para mantener el código limpio
  const timelineData = [
    {
      type: 'work',
      title: 'Desarrollador Web Full Stack',
      company: 'Microactiva SPA',
      period: '2025',
      description: 'Práctica Profesional. Encargado del desarrollo integral de sistemas de gestión para optimización de procesos.',
      details: [
        'Desarrollo de sistema web para la gestión de gastos comunes.',
        'Diseño de interfaces responsivas y conexión a bases de datos SQL.',
        'Implementación de migraciones y despliegue de soluciones.',
      ],
    },
    {
      type: 'education',
      title: 'Técnico Nivel Superior en Informática',
      company: 'CFT Teodoro Wickel Klüwen',
      period: '2025',
      description: 'Titulado con distinción académica.',
      details: [],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

      <div className="max-w-4xl mx-auto">
        
        {/* 1. HEADER DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trayectoria <span className="text-indigo-500">Profesional</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 mb-8 max-w-xl mx-auto"
          >
            Mi camino académico y laboral, marcado por el aprendizaje continuo y la creación de soluciones reales.
          </motion.p>

          {/* BOTÓN DESCARGA CV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="/cv.pdf" 
              download="CV_Cristofer_Altamirano.pdf"
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5 text-indigo-600 transition-transform group-hover:-translate-y-1" />
              <span>Descargar Currículum</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-indigo-400/50 animate-pulse" />
            </a>
          </motion.div>
        </div>

        {/* 2. TIMELINE */}
        <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
          {/* Efecto de línea brillante (Gradiente vertical) */}
          <div className="absolute top-0 left-[-1px] h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-50" />

          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* ICONO DEL TIMELINE (Punto) */}
              <div className={`absolute -left-[10px] top-0 p-2 rounded-full border-4 border-neutral-950 z-10 transition-colors duration-300 ${item.type === 'work' ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-neutral-700'}`}>
                {item.type === 'work' ? (
                  <Briefcase className="w-4 h-4 text-white" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-white" />
                )}
              </div>

              {/* TARJETA GLASSMORPHISM */}
              <div className="relative p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 hover:bg-neutral-900/60 backdrop-blur-sm transition-all duration-300 hover:translate-x-2">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    {item.period}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-medium text-neutral-300">
                    {item.company}
                  </h4>
                  <p className="text-neutral-400 text-sm mt-1">
                    {item.description}
                  </p>
                </div>

                {/* Detalles (Lista) */}
                {item.details.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-400">
                        <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};