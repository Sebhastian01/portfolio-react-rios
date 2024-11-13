import React, { useState, useEffect } from 'react';
import './Time.css'

export const Time = () => {
  const [segundos, setSegundos] = useState(0);  // Estado del contador
  const [activo, setActivo] = useState(false);   // Estado para saber si el contador está en marcha

  // Efecto para manejar el temporizador
  useEffect(() => {
    let intervalo = null;
    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    } else if (!activo && segundos !== 0) {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos]);

  // Función para iniciar el contador
  const iniciarContador = () => {
    setActivo(true);
  };

  // Función para parar y resetear el contador
  const pararContador = () => {
    setActivo(false);
    setSegundos(0);
  };

  return (
    <div className='count'>
      <h1>Contador: {segundos} segundos</h1>
      <button onClick={iniciarContador} disabled={activo}>Iniciar</button>
      <button onClick={pararContador}>Parar</button>
    </div>
  );
}