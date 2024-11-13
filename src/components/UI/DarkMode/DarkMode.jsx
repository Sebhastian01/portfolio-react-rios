import React, { useState } from 'react';

export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false); // Estado para controlar el modo

    // Función para alternar entre modos
    const toggleMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <div className='AreaDark'
        style={{
          backgroundColor: darkMode ? "#000000" : "#FFFFFF",
          color: darkMode ? "#FFFFFF" : "#000000",
          height: "10rem",
          width:"10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-color 0.5s, color 0.5s" // Transición suave
        }}
      >
        <button onClick={toggleMode}>
          {darkMode ? "Modo Light" : "Modo Dark"}
        </button>
      </div>
    );
}
