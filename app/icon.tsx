import { ImageResponse } from 'next/og'

// Configuración de la imagen (tamaño y tipo)
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Generación del icono con código
export default function Icon() {
  return new ImageResponse(
    (
      // Elemento JSX que simula el icono
      <div
        style={{
          fontSize: 16,
          background: '#0f172a', // Fondo oscuro (gray-900)
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#22d3ee', // Color Cian brillante
          borderRadius: '20%', // Bordes redondeados
          fontWeight: 'bold',
          border: '2px solid #374151', // Borde gris sutil
        }}
      >
        CA
      </div>
    ),
    {
      ...size,
    }
  )
}