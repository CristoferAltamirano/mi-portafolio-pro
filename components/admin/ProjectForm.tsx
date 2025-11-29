'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MultiSelectWithIcon } from '@/components/ui/MultiSelectWithIcon';
import { 
  Code2, Database, Server, Layout, Globe, Cpu, Layers, Braces, 
  Terminal, FileCode, Palette, Workflow, Table, Cloud, Container, Send,
  Plus, X, Image as ImageIcon 
} from 'lucide-react';

interface Props {
  initialData?: any;
}

const TECH_OPTIONS = [
  { label: 'React', value: 'React', icon: <Layout className="w-4 h-4" /> },
  { label: 'Next.js', value: 'Next.js', icon: <Globe className="w-4 h-4" /> },
  { label: 'Angular', value: 'Angular', icon: <Globe className="w-4 h-4 text-red-500" /> },
  { label: 'TypeScript', value: 'TypeScript', icon: <FileCode className="w-4 h-4 text-blue-500" /> },
  { label: 'JavaScript', value: 'JavaScript', icon: <Code2 className="w-4 h-4 text-yellow-500" /> },
  { label: 'Node.js', value: 'Node.js', icon: <Workflow className="w-4 h-4 text-green-600" /> },
  { label: 'Laravel', value: 'Laravel', icon: <Layers className="w-4 h-4 text-red-600" /> },
  { label: 'ASP.NET Core', value: 'ASP.NET Core', icon: <Server className="w-4 h-4 text-purple-600" /> },
  { label: 'C#', value: 'C#', icon: <Code2 className="w-4 h-4 text-purple-500" /> },
  { label: 'Java', value: 'Java', icon: <Cpu className="w-4 h-4 text-orange-600" /> },
  { label: 'Tailwind CSS', value: 'Tailwind CSS', icon: <Palette className="w-4 h-4 text-cyan-500" /> },
  { label: 'Bootstrap', value: 'Bootstrap', icon: <Layout className="w-4 h-4 text-purple-700" /> },
  { label: 'MongoDB', value: 'MongoDB', icon: <Database className="w-4 h-4 text-green-500" /> },
  { label: 'SQL Server', value: 'SQL Server', icon: <Database className="w-4 h-4 text-red-700" /> },
  { label: 'MySQL', value: 'MySQL', icon: <Database className="w-4 h-4 text-blue-600" /> },
  { label: 'Docker', value: 'Docker', icon: <Container className="w-4 h-4 text-blue-400" /> },
  { label: 'Git', value: 'Git', icon: <Terminal className="w-4 h-4 text-orange-500" /> },
  { label: 'Vercel', value: 'Vercel', icon: <Cloud className="w-4 h-4" /> },
];

export const ProjectForm = ({ initialData }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // Estado para el input temporal de imagen
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: [] as string[],
    link: '',
    demoLink: '',
    images: [] as string[], // Array para múltiples imágenes
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        technologies: initialData.technologies || [],
        link: initialData.link,
        demoLink: initialData.demoLink || '',
        // Cargamos todas las imágenes si existen, si no, intentamos cargar la antigua imageUrl
        images: initialData.images && initialData.images.length > 0 
                ? initialData.images 
                : (initialData.imageUrl ? [initialData.imageUrl] : [])
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para agregar una imagen al array
  const handleAddImage = (e: React.MouseEvent) => {
    e.preventDefault(); // Evitar submit del form
    if (currentImageUrl.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, currentImageUrl.trim()]
      });
      setCurrentImageUrl(''); // Limpiar input
    }
  };

  // Función para eliminar una imagen de la lista
  const handleRemoveImage = (indexToRemove: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, index) => index !== indexToRemove)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = initialData ? `/api/projects/${initialData._id}` : '/api/projects';
      const method = initialData ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error en la operación');

      alert(initialData ? '¡Proyecto actualizado! 🔄' : '¡Proyecto subido con éxito! 🚀');
      router.push('/admin/dashboard');
      router.refresh();

    } catch (error) {
      console.error(error);
      alert('Hubo un error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {initialData ? 'Editar Proyecto' : 'Subir Nuevo Proyecto'}
      </h2>

      {/* Título */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* Descripción */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* Tecnologías */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tecnologías</label>
        <MultiSelectWithIcon
          options={TECH_OPTIONS}
          selectedValues={formData.technologies}
          onChange={(newValues) => setFormData({ ...formData, technologies: newValues })}
          placeholder="Selecciona las tecnologías..."
        />
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Link GitHub</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Link Demo (Opcional)</label>
          <input
            type="url"
            name="demoLink"
            value={formData.demoLink}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>

      {/* SECCIÓN DE IMÁGENES MÚLTIPLES */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Galería de Imágenes</label>
        
        {/* Input para agregar */}
        <div className="flex gap-2 mb-3">
          <input
            type="url"
            value={currentImageUrl}
            onChange={(e) => setCurrentImageUrl(e.target.value)}
            placeholder="Pegar URL de imagen (https://...)"
            className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-sm"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); // Evitar submit al dar Enter en este input
                handleAddImage(e as any);
              }
            }}
          />
          <button
            type="button"
            onClick={handleAddImage}
            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-2 rounded-lg transition-colors border border-gray-200 dark:border-gray-600"
            title="Agregar Imagen"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de imágenes agregadas */}
        <div className="space-y-2">
          {formData.images.map((url, index) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700 group">
              <div className="w-10 h-10 relative bg-gray-200 dark:bg-gray-600 rounded overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="Preview" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate flex-1">{url}</p>
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="text-red-400 hover:text-red-600 p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          
          {formData.images.length === 0 && (
            <div className="text-center p-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
              <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Sin imágenes. Agrega al menos una.</p>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50 mt-6"
      >
        {loading ? 'Guardando...' : (initialData ? 'Actualizar Proyecto' : 'Publicar Proyecto')}
      </button>
    </form>
  );
};