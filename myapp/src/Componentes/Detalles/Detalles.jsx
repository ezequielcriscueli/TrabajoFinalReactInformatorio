import React from 'react'
import Talles from '../Talles/Talles';
import Carrito from '../Carrito/Carrito';
import "./Detalles.css"

function Detalles() {
  return (
    <section className="container detalles">
      <h1>
        <b>Nike Air Force 1 07</b>
      </h1>
      <h3>Zapatillas de Moda para Mujer</h3>
      <p>
        Devuelve sensaciones retro a cada paso con este original de básquetbol.
        La combinación de una parte superior de lona duradera con revestimientos
        en las costuras y detalles de cuero vitopnte en el Swoosh hace que este
        original inspirado en la herencia proporcione una estética única y
        desgastada con un estilo retro. Además, la unidad Nike Air oculta y la
        confección duradera de los años 80 añaden la comodidad que esperas
        obtener del AF1.
      </p>
      <h3>
        <b>$109.999</b>
      </h3>
      <span>FJ5440-133</span>
      <Talles />
      <Carrito />
    </section>
  );
}

export default Detalles