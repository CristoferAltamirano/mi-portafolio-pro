'use client';

import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Hablemos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Estoy disponible para nuevos desafíos profesionales. Si buscas un desarrollador Full Stack versátil y comprometido, contáctame.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Card */}
          <a 
            href="mailto:cristoferfabian93@gmail.com"
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
          >
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">cristoferfabian93@gmail.com</p>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+56950676805"
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
          >
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-full text-green-600 dark:text-green-400 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Teléfono</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">+56 9 5067 6805</p>
          </a>

          {/* Location/Social Card */}
          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-full text-purple-600 dark:text-purple-400 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ubicación</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Temuco, Chile</p>
            <a 
              href="https://github.com/CristoferAltamirano" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
            >
              <Github className="w-4 h-4" /> Ver GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};