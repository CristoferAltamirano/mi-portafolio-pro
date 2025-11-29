'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const INACTIVITY_LIMIT = 2 * 60 * 1000; // 2 minutos en milisegundos

export default function SessionManager() {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      // Redirigir al login
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    // Configurar el timer para ejecutar logout después del límite
    timerRef.current = setTimeout(() => {
      alert('Sesión cerrada por inactividad 🔒');
      logout();
    }, INACTIVITY_LIMIT);
  };

  useEffect(() => {
    // Eventos que consideramos "actividad"
    const events = ['mousedown', 'keydown', 'scroll', 'mousemove', 'touchstart'];

    // Iniciar el timer la primera vez
    resetTimer();

    // Escuchar eventos
    const handleActivity = () => resetTimer();

    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });

    // Limpieza al salir
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, []);

  return null; // Este componente no renderiza nada visual
}