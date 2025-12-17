import React from 'react';

const Logo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo CA"
    >
      {/* Definición del gradiente "Pro" (Cian a Azul Eléctrico) */}
      <defs>
        <linearGradient id="proGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan-500 */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Blue-500 */}
        </linearGradient>
        
        {/* Efecto de brillo (Glow) */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Símbolo de apertura < */}
      <path
        d="M40 20 L10 50 L40 80"
        stroke="url(#proGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Iniciales CA */}
      <text
        x="100"
        y="70"
        fontSize="60"
        fontFamily="sans-serif"
        fontWeight="bold"
        textAnchor="middle"
        fill="white"
        className="dark:fill-white fill-gray-900" 
      >
        CA
      </text>

      {/* Cursor parpadeante _ (Animación CSS integrada) */}
      <rect
        x="155"
        y="55"
        width="15"
        height="3"
        fill="url(#proGradient)"
        className="animate-pulse"
      />

      {/* Símbolo de cierre > */}
      <path
        d="M160 20 L190 50 L160 80"
        stroke="url(#proGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default Logo;