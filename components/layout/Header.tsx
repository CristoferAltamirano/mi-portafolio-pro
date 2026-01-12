'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// IMPORTANTE: Importamos 'Variants' para tipar las animaciones correctamente
import { motion, AnimatePresence, Variants } from 'framer-motion'; 
import { Menu, X, Sparkles } from 'lucide-react';
import Logo from '@/components/Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
  ];

  // SOLUCIÓN AL ERROR DE TS:
  // Definimos explícitamente que esto es de tipo 'Variants'
  const navContainerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVars: Variants = {
    hidden: { y: -20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", // Ahora TS sabe que esto es literal "spring"
        stiffness: 300, 
        damping: 24 
      } 
    },
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-neutral-950/80 backdrop-blur-xl border-white/5 py-3 shadow-lg shadow-black/5' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-indigo-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <Logo className="h-10 w-auto relative z-10" />
            </motion.div>
            
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
              Cristofer 
              <motion.span 
                className="text-indigo-500 inline-block ml-1"
                animate={{ color: ["#6366f1", "#a855f7", "#6366f1"] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                .Dev
              </motion.span>
            </span>
          </Link>

          {/* MENÚ DESKTOP */}
          <motion.nav 
            variants={navContainerVars}
            initial="hidden"
            animate="show"
            className="hidden md:flex items-center gap-1"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <motion.div key={item.path} variants={navItemVars}>
                  <Link 
                    href={item.path} 
                    className="relative px-4 py-2 text-sm font-medium transition-colors group"
                  >
                    <span className={`relative z-10 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/5"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* CTA DESKTOP */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="hidden md:flex items-center"
          >
            <motion.a 
              href="/cv.pdf" 
              target="_blank"
              whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
              </motion.div>
              <span>Resumen</span>
            </motion.a>
          </motion.div>

          {/* BOTÓN MÓVIL */}
          <div className="flex md:hidden items-center relative z-50">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              whileTap={{ scale: 0.8 }}
              className="p-2 text-neutral-300 hover:text-white transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* MENÚ MÓVIL FULLSCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[60px] z-40 bg-neutral-950/95 backdrop-blur-2xl border-t border-white/5 md:hidden overflow-hidden"
          >
            <motion.div 
              variants={navContainerVars}
              initial="hidden"
              animate="show"
              className="flex flex-col p-8 space-y-6"
            >
              {navItems.map((item) => (
                <motion.div key={item.path} variants={navItemVars}>
                  <Link 
                    href={item.path} 
                    onClick={() => setIsOpen(false)} 
                    className={`text-3xl font-bold tracking-tight ${pathname === item.path ? 'text-indigo-400' : 'text-neutral-400'}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={navItemVars}>
                <hr className="border-white/10 my-4" />
              </motion.div>

              <motion.div variants={navItemVars}>
                <a 
                  href="/cv.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg active:scale-95 transition-transform"
                >
                  <Sparkles className="w-5 h-5" />
                  Descargar CV
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};