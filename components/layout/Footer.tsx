'use client';

import Link from 'next/link';
import { Lock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col md:flex-row justify-center items-center gap-2">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Cristofer Altamirano. Desarrollado con Next.js 14, Tailwind CSS & TypeScript.
        </p>
        
        {/* BOTÓN SECRETO: Un candado pequeño y sutil */}
        <Link 
          href="/admin/dashboard" 
          className="opacity-10 hover:opacity-100 transition-opacity text-gray-400 p-1"
          aria-label="Admin Login"
        >
          <Lock className="w-3 h-3" />
        </Link>
      </div>
    </footer>
  );
};