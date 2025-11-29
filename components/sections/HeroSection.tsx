'use client';

import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center py-20 px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up">
          Hola, soy un Desarrollador <span className="text-indigo-600 dark:text-indigo-400">Full Stack</span>.
        </h1>
        
        {/* TEXTO ACTUALIZADO: Agregamos Angular, .NET y la frase 'y más'. */}
        <p className="mt-6 text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          Construyo aplicaciones web escalables y de alto rendimiento usando la pila moderna de React, Next.js, Node.js, Angular, .NET y más.
        </p>

        <div className="mt-10">
          <a
            href="/projects"
            className="relative z-10 inline-flex items-center justify-center px-8 py-3 font-semibold text-lg rounded-xl transition-all duration-300 bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 hover:scale-105 after:content-[''] after:absolute after:inset-0 after:rounded-xl after:bg-indigo-500 after:blur-xl after:opacity-0 hover:after:opacity-50 after:transition-opacity after:-z-10"
          >
            Ver mis Proyectos
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};