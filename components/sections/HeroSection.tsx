'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Code2 } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-950 text-white py-20">
      
      {/* 1. FONDO DE REJILLA (GRID) MODERNO */}
      <div className="absolute inset-0 z-0 h-full w-full bg-neutral-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
        {/* Luz ambiental sutil */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]" />
        <div className="absolute right-10 bottom-10 -z-10 h-[200px] w-[200px] rounded-full bg-cyan-500 opacity-10 blur-[80px]" />
      </div>

      <div className="z-10 text-center px-4 max-w-5xl">
        
        {/* BADGE ANIMADO SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-fit flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Disponible para nuevos proyectos
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Hola, soy un Desarrollador <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-gradient-x">
            Full Stack
          </span>
        </motion.h1>

        {/* DESCRIPCIÓN (Tu texto original + Angular/.NET) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-xl sm:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
        >
          Construyo aplicaciones web escalables y de alto rendimiento usando la pila moderna de{' '}
          <span className="text-white font-semibold">React, Next.js, Node.js</span>
          , combinada con la potencia de{' '}
          <span className="text-white font-semibold">Angular, .NET</span> y más.
        </motion.p>

        {/* BOTONES DE ACCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Botón Principal: Ver Proyectos */}
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold text-white bg-indigo-600 rounded-xl overflow-hidden transition-all hover:scale-105 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25"
          >
            <span className="relative z-10 flex items-center">
              Ver mis Proyectos
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Efecto de brillo al pasar el mouse */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>

          {/* Botones Sociales / Github */}
          <div className="flex gap-3">
            <a
              href="https://github.com/CristoferAltamirano"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-indigo-500/50 hover:bg-neutral-800 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            {/* Si tienes LinkedIn pon el link real aquí, si no, puedes borrar este bloque */}
            <a
              href="www.linkedin.com/in/cristofer-altamirano"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-indigo-500/50 hover:bg-neutral-800 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};