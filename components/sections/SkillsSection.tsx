'use client';

import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Terminal, 
  Layout, 
  Globe, 
  Cpu, 
  Layers, 
  Braces,
  GitBranch,
  Cloud,
  Container,
  Send,
  FileCode,  // Nuevo para TypeScript
  Palette,   // Nuevo para Tailwind
  Workflow,  // Nuevo para Node.js
  Table      // Nuevo para Entity Framework / ORM
} from 'lucide-react';

type Category = 'frontend' | 'backend' | 'data_tools';

const skillsData = {
  frontend: [
    { name: 'Angular', icon: <Globe className="w-6 h-6" />, level: 'Avanzado', desc: 'Framework SPA' },
    { name: 'React / Next.js', icon: <Layout className="w-6 h-6" />, level: 'Intermedio', desc: 'Componentes Modernos' },
    { name: 'TypeScript', icon: <FileCode className="w-6 h-6" />, level: 'Avanzado', desc: 'Tipado Estático' },
    { name: 'JavaScript', icon: <Code2 className="w-6 h-6" />, level: 'Avanzado', desc: 'ES6+' },
    { name: 'Tailwind CSS', icon: <Palette className="w-6 h-6" />, level: 'Avanzado', desc: 'Estilos Utilitarios' },
    { name: 'HTML & CSS', icon: <Braces className="w-6 h-6" />, level: 'Avanzado', desc: 'Diseño Responsivo' },
  ],
  backend: [
    { name: 'Laravel (PHP)', icon: <Layers className="w-6 h-6" />, level: 'Avanzado', desc: 'API REST & MVC' },
    { name: 'ASP.NET (C#)', icon: <Server className="w-6 h-6" />, level: 'Intermedio', desc: 'Entorno Enterprise' },
    { name: 'Node.js', icon: <Workflow className="w-6 h-6" />, level: 'Intermedio', desc: 'Runtime JS' },
    { name: 'Java', icon: <Cpu className="w-6 h-6" />, level: 'Intermedio', desc: 'POO Sólida' },
    { name: 'Entity Framework', icon: <Table className="w-6 h-6" />, level: 'Intermedio', desc: 'ORM .NET' },
    { name: 'C++', icon: <Code2 className="w-6 h-6" />, level: 'Intermedio', desc: 'Lógica Algorítmica' },
  ],
  data_tools: [
    { name: 'SQL Server', icon: <Database className="w-6 h-6" />, level: 'Intermedio', desc: 'Relacional Enterprise' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" />, level: 'Avanzado', desc: 'Base de Datos Web' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 'Intermedio', desc: 'NoSQL & Documentos' },
    { name: 'Git', icon: <GitBranch className="w-6 h-6" />, level: 'Avanzado', desc: 'Control de Versiones' },
    { name: 'Visual Studio', icon: <Terminal className="w-6 h-6" />, level: 'Avanzado', desc: 'IDE Profesional' },
    { name: 'Postman', icon: <Send className="w-6 h-6" />, level: 'Intermedio', desc: 'Testing de APIs' },
    { name: 'Docker', icon: <Container className="w-6 h-6" />, level: 'Intermedio', desc: 'Contenedores' },
    { name: 'Vercel', icon: <Cloud className="w-6 h-6" />, level: 'Intermedio', desc: 'Despliegue CI/CD' },
  ],
};

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<Category>('backend');

  const getTabLabel = (tab: Category) => {
    switch(tab) {
      case 'frontend': return 'Frontend & UI';
      case 'backend': return 'Backend & Core';
      case 'data_tools': return 'Datos & Herramientas';
    }
  };

  return (
    <section className="py-24 px-4 transition-colors relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Arsenal Tecnológico
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Una combinación estratégica de frameworks empresariales robustos y tecnologías web modernas para soluciones de alto impacto.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/50">
            {(['backend', 'frontend', 'data_tools'] as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
                  ${activeTab === tab 
                    ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-white shadow-md shadow-gray-200/50 dark:shadow-none' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-700/30'}
                `}
              >
                {getTabLabel(tab)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {skillsData[activeTab].map((skill) => (
            <div 
              key={skill.name}
              className="group relative flex flex-col p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 dark:hover:border-indigo-400/30"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-700 text-indigo-600 dark:text-indigo-400 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-600/30">
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {skill.name}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700/50 w-full">
                <div className="flex justify-between items-center text-sm">
                   <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1 truncate">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};