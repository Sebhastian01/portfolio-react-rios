import React, { useState } from 'react';
import { DarkMode } from '../DarkMode/DarkMode';
import { LikesDislike } from '../LikesDislike/LikesDislike';
import { Time } from '../Time/Time';
import './ChangeColor.css'

const Colors = [
    "#FF0000", // Rojo
    "#00FF00", // Verde
    "#0000FF", // Azul
    "#FFFF00", // Amarillo
    "#FF00FF", // Magenta
    "#00FFFF", // Cian
    "#000000", // Negro
    "#FFFFFF", // Blanco
    "#808080", // Gris
    "#800000", // Marrón oscuro
    "#808000", // Oliva
    "#800080", // Púrpura
    "#008080", // Verde azulado
    "#C0C0C0", // Plata
    "#FFA500", // Naranja
    "#A52A2A"  // Marrón
  ];

export const ChangeColor = () => {
const [color, setColor] = useState("#FFFFFF");

  const GenerateColor = () => {
    const RamdonColor = Colors[Math.floor(Math.random() * Colors.length)];
    setColor(RamdonColor);
  };

  return (
    <div className='Colors' style={{ backgroundColor: color}}>
      <LikesDislike/>
      <button onClick={GenerateColor}>Generar color</button>
      <div className='ColorSelect'>Color seleccionado: ${color}</div>
      <DarkMode/>
      <Time/>
    </div>
  );
}
