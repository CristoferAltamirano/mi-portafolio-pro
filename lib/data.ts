import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gastos Comunes',
    description: 'Solución integral para administración de edificios. Gestión de residentes, cálculo de prorrateos y reportes financieros automáticos.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'], 
    link: 'https://github.com/CristoferAltamirano/sistema-gastos-comunes-laravel.git',
    // Usamos imágenes de placeholder temáticas por ahora
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    title: 'Biblioteca Digital SPA',
    description: 'Aplicación de Página Única (SPA) para la gestión ágil de préstamos y catálogos de libros. Interfaz reactiva y moderna.',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Material UI'], 
    link: 'https://github.com/CristoferAltamirano',
    imageUrl: 'https://images.unsplash.com/photo-1507842217121-9e93ca2d1f9a?auto=format&fit=crop&q=80&w=1000',
    demoLink: 'https://tu-demo-biblioteca.vercel.app' // Ejemplo de demo
  },
  {
    id: 3,
    title: 'Plataforma Ministerio de Magia',
    description: 'Sistema de gestión de expedientes mágicos. Backend robusto para manejar perfiles de magos y registros de hechizos.',
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework'], 
    link: 'https://github.com/CristoferAltamirano',
    imageUrl: 'https://images.unsplash.com/photo-1551269901-5c5e14548437?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 4,
    title: 'Pokedex API Integration',
    description: 'Consumo avanzado de API REST para renderizar información dinámica de Pokémon, estadísticas y cadenas de evolución.',
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'API REST'],
    link: 'https://github.com/CristoferAltamirano',
    imageUrl: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=1000',
    demoLink: 'https://pokedex-demo.vercel.app'
  }
];