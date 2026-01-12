'use client';

import Link from 'next/link';
import { Lock, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-neutral-950 pt-16 pb-8 overflow-hidden">
      
      {/* LUZ AMBIENTAL SUPERIOR (Efecto Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-indigo-500/10 blur-[80px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* 1. IDENTIDAD & MISIÓN */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Cristofer <span className="text-indigo-400">Altamirano</span>
            </h2>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              Desarrollando experiencias digitales excepcionales desde La Araucanía para el mundo. 
              Transformando código complejo en soluciones simples.
            </p>
            {/* Stack Badges (Texto pequeño con estilo) */}
            <div className="flex items-center gap-3 mt-2 text-xs text-neutral-500 font-mono">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div> Next.js 14
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div> Tailwind
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div> TypeScript
              </span>
            </div>
          </div>

          {/* 2. CONEXIONES & SOCIALES */}
          <div className="flex flex-col md:items-end gap-4">
            <h3 className="text-white font-semibold">Conectemos</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/CristoferAltamirano" 
                target="_blank" 
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-indigo-500/50 hover:bg-white/5 transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              </a>
              <a 
                href="www.linkedin.com/in/cristofer-altamirano" 
                target="_blank" 
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-indigo-500/50 hover:bg-white/5 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              </a>
              <a 
                href="mailto:cristoferfabian93@gmail.com" 
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-indigo-500/50 hover:bg-white/5 transition-all group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. BARRA INFERIOR (COPYRIGHT + ADMIN SECRETO) */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm flex items-center gap-1">
            © {currentYear} Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500/20 animate-pulse" /> por Cristofer.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-neutral-500 hover:text-white transition-colors">
              Privacidad
            </Link>
            
            {/* EL BOTÓN SECRETO MEJORADO */}
            {/* Ahora tiene un tooltip invisible que aparece al hover y un efecto de "glitch" sutil */}
            <Link 
              href="/admin/dashboard" 
              className="group relative p-2 text-neutral-800 hover:text-indigo-500 transition-colors opacity-50 hover:opacity-100"
              aria-label="Admin Area"
            >
              <Lock className="w-3 h-3" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-indigo-600 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Admin Area
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};