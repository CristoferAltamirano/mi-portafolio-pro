'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Database, Server, Terminal, Layout, Globe, Cpu, Layers, Braces,
  GitBranch, Cloud, Container, Send, FileCode, Palette, Workflow, Table
} from 'lucide-react';

type Category = 'frontend' | 'backend' | 'data_tools';

// Datos de Habilidades (Mantenemos tu estructura)
const skillsData = {
  frontend: [
    { name: 'Angular', icon: <Globe className="w-6 h-6" />, level: 'Avanzado', desc: 'Framework SPA Robusto' },
    { name: 'React / Next.js', icon: <Layout className="w-6 h-6" />, level: 'Intermedio', desc: 'SSR & Server Components' },
    { name: 'TypeScript', icon: <FileCode className="w-6 h-6" />, level: 'Avanzado', desc: 'Tipado Estático Seguro' },
    { name: 'JavaScript', icon: <Code2 className="w-6 h-6" />, level: 'Avanzado', desc: 'ES6+ & Asincronía' },
    { name: 'Tailwind CSS', icon: <Palette className="w-6 h-6" />, level: 'Avanzado', desc: 'Diseño Utilitario Rápido' },
    { name: 'HTML & CSS', icon: <Braces className="w-6 h-6" />, level: 'Avanzado', desc: 'Semántica & Flexbox/Grid' },
  ],
  backend: [
    { name: 'Laravel (PHP)', icon: <Layers className="w-6 h-6" />, level: 'Avanzado', desc: 'API REST, Eloquent & Jobs' },
    { name: 'ASP.NET (C#)', icon: <Server className="w-6 h-6" />, level: 'Intermedio', desc: 'Web API & Microservicios' },
    { name: 'Node.js', icon: <Workflow className="w-6 h-6" />, level: 'Intermedio', desc: 'Express & Event Loop' },
    { name: 'Java', icon: <Cpu className="w-6 h-6" />, level: 'Intermedio', desc: 'Spring Boot & POO' },
    { name: 'Entity Framework', icon: <Table className="w-6 h-6" />, level: 'Intermedio', desc: 'Code First & Migrations' },
    { name: 'C++', icon: <Code2 className="w-6 h-6" />, level: 'Intermedio', desc: 'Estructuras de Datos' },
  ],
  data_tools: [
    { name: 'SQL Server', icon: <Database className="w-6 h-6" />, level: 'Intermedio', desc: 'Stored Procedures & Triggers' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" />, level: 'Avanzado', desc: 'Optimización de Consultas' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 'Intermedio', desc: 'Agregaciones & Atlas' },
    { name: 'Git', icon: <GitBranch className="w-6 h-6" />, level: 'Avanzado', desc: 'Git Flow & CI/CD' },
    { name: 'Docker', icon: <Container className="w-6 h-6" />, level: 'Intermedio', desc: 'Docker Compose & Images' },
    { name: 'Postman', icon: <Send className="w-6 h-6" />, level: 'Intermedio', desc: 'Automatización de Tests' },
    { name: 'Vercel', icon: <Cloud className="w-6 h-6" />, level: 'Intermedio', desc: 'Deploy Serverless' },
    { name: 'Visual Studio', icon: <Terminal className="w-6 h-6" />, level: 'Avanzado', desc: 'Debugging Avanzado' },
  ],
};

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<Category>('backend');

  const categories: { id: Category; label: string }[] = [
    { id: 'backend', label: 'Backend & Core' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'data_tools', label: 'Datos & Herramientas' },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      
      {/* Luces de Fondo (Atmósfera) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header de Sección */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Tecnológico</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            Una combinación estratégica de frameworks empresariales robustos y tecnologías web modernas para soluciones de alto impacto.
          </motion.p>
        </div>

        {/* Tabs "Sliding" (Estilo iOS) */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 bg-neutral-900/60 backdrop-blur-md rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 z-10
                  ${activeTab === cat.id ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'}
                `}
              >
                {/* Fondo deslizante mágico */}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Skills con Animación de Salida/Entrada */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // La clave cambia, forzando la animación
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }} // Efecto cascada (stagger)
                className="group relative flex flex-col p-5 bg-neutral-900/40 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.15)]"
              >
                {/* Icono con Glow */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 text-indigo-400 mb-4 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 mb-4 flex-grow font-medium">
                  {skill.desc}
                </p>

                {/* Badge de Nivel */}
                <div className="pt-3 mt-auto border-t border-white/5 flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2 py-1 rounded full border ${
                    skill.level === 'Avanzado' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};