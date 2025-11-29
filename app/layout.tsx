import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portafolio Profesional | Full Stack',
  description: 'Portafolio desarrollado con Next.js 14 y Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // IMPORTANTE: 'suppressHydrationWarning' evita errores porque el servidor y cliente difieren en la clase 'dark'
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* SCRIPT ANTI-PARPADEO (Critical Script)
            Este script se ejecuta antes de que la página se muestre.
            Lee el localStorage o la preferencia del sistema y añade la clase 'dark' inmediatamente.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storage = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  // Si hay tema guardado 'dark' O (no hay nada guardado Y el sistema es dark)
                  if (storage === 'dark' || (!storage && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      {/* LIMPIEZA: Quitamos las clases de color (bg-gray-50, etc.) porque ahora
         'app/globals.css' maneja el tema con variables CSS (--background, --foreground).
         Esto asegura que el cambio de color sea sólido y sin conflictos.
      */}
      <body className={`${inter.className} transition-colors duration-300`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}