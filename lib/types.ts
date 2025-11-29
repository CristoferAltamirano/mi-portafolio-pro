export interface Project {
  // Ahora aceptamos string (MongoDB) o number (Datos viejos)
  id: string | number; 
  title: string;
  description: string;
  technologies: string[];
  link: string;
  demoLink?: string;
  // Aceptamos array de imágenes (Carrusel) o una sola (Legacy)
  images?: string[]; 
  imageUrl?: string;
}