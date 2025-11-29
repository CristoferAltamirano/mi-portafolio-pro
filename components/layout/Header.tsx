'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
// Ya no importamos DarkModeToggle

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg sm:text-xl font-bold text-indigo-400 flex items-center gap-2">
            <Code className="w-6 h-6" /> 
            <span>Portafolio Cristofer Altamirano</span>
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-indigo-400 transition font-medium">Inicio</Link>
            <Link href="/projects" className="text-gray-300 hover:text-indigo-400 transition font-medium">Proyectos</Link>
            
            {/* Eliminamos el div del DarkModeToggle */}
          </nav>

          {/* Botón Móvil */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4 border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col space-y-4">
             <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-indigo-400">Inicio</Link>
             <Link href="/projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-indigo-400">Proyectos</Link>
          </div>
        </div>
      )}
    </header>
  );
};