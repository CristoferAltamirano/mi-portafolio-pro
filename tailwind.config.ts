import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // CAMBIO CRÍTICO: Usamos 'selector' en lugar de 'class'. 
  // Esto asegura que Tailwind v3.4+ y v4 obedezcan al botón y no a tu Windows.
  darkMode: 'selector', 
  theme: {
    extend: {
      // Las animaciones las definimos en globals.css para compatibilidad con v4,
      // así que podemos dejar esta sección limpia para evitar conflictos.
    },
  },
  plugins: [],
};
export default config;