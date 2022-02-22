import React from 'react';
import { Formulario } from './components/Formulario';

export const ReservamosApp = () => {
  return (
  <div>
      <header>ReservamosApp</header>
      <div className="contenedor">
        <h2>Compara la temperatura de diversas ciudades</h2>
        <Formulario/>
      </div>
  </div>
  );
};
