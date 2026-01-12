'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Github, ArrowUpRight, Send } from 'lucide-react';

export const ContactSection = () => {
  
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Status: Disponible
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            ¿Listo para empezar? <br />
            {/* CORRECCIÓN: bg-linear-to-r para Tailwind v4 */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Creemos algo increíble.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-xl mx-auto text-lg"
          >
            Si buscas un desarrollador Full Stack versátil para llevar tu proyecto al siguiente nivel, mi bandeja de entrada está abierta.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Email Card */}
          <motion.a 
            variants={itemVars}
            href="mailto:cristoferfabian93@gmail.com"
            className="group relative flex flex-col items-center p-8 bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)]"
          >
            <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <Mail className="w-8 h-8 group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Envíame un correo</h3>
            <p className="text-neutral-400 text-sm mb-6">cristoferfabian93@gmail.com</p>
            <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
              Escribir ahora <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            variants={itemVars}
            href="tel:+56950676805"
            className="group relative flex flex-col items-center p-8 bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]"
          >
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <Phone className="w-8 h-8 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Llamar / WhatsApp</h3>
            <p className="text-neutral-400 text-sm mb-6">+56 9 5067 6805</p>
            <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
              Contactar <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </motion.a>

          {/* Location Card */}
          <motion.div 
            variants={itemVars}
            className="group relative flex flex-col items-center p-8 bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)]"
          >
            <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <MapPin className="w-8 h-8 group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
            <p className="text-neutral-400 text-sm mb-6">Padre Las Casas, Temuco</p>
            
            <a 
              href="https://github.com/CristoferAltamirano" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white"
            >
              <Github className="w-4 h-4" />
              Ver perfil de GitHub
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};