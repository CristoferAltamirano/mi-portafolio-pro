'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Revisar si hay algo guardado en localStorage
    const storedTheme = localStorage.getItem('theme');
    // 2. Revisar preferencia del sistema operativo
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Si está guardado 'dark' O (no hay nada guardado Y el sistema prefiere dark)
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      // Cambiar a Claro
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      // Cambiar a Oscuro
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // Evitar renderizado incorrecto en el servidor (Hydration mismatch)
  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder del mismo tamaño para evitar saltos
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Alternar modo oscuro"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
      )}
    </button>
  );
};