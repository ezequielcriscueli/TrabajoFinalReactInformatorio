import React from 'react'
import "./Talles.css"
import TablaTalles from '../TablaTalles/TablaTalles';

function Talles() {
    const handleTallesClick = (talle) => {
        const botones = document.querySelectorAll(".talles button");

        botones.forEach((btn)=>{
            btn.classList.remove("active")
        })

        const buttonSeleccionado = document.querySelector(
          `.talles button[data-size="${talle}"]` )
          buttonSeleccionado.classList.add("active")
          console.log(buttonSeleccionado.dataset.size);

        const cantidadStock = document.querySelector(".stock")
    
          switch (buttonSeleccionado.dataset.size) {
            case "35":
              cantidadStock.innerHTML = "Quedan 7 pares";

              break;
            case "36":
              cantidadStock.innerHTML = "Quedan 10 pares";
              break;

            case "37":
              cantidadStock.innerHTML = "Sin stock";
              break;

            case "37.5":
              cantidadStock.innerHTML = "Sin stock";
              break;

            case "38":
              cantidadStock.innerHTML = "Quedan 3 pares";
              break;

            case "38.5":
              cantidadStock.innerHTML = "Sin stock";
              break;

            case "39":
              cantidadStock.innerHTML = "Sin stock";
              break;

            case "40":
              cantidadStock.innerHTML = "Quedan 3 pares";
              break;

            case "41":
              cantidadStock.innerHTML = "Quedan 10 pares";
              break;
          }
    }

  return (
    <div className='size'>
      <div className='select'>
        <h4>Selecciona talle</h4>
        <TablaTalles/>
      </div>      
      <div className='talles'>        
          {[35,36,37,37.5,38,38.5,39,40].map((talle) => (
              <button key={talle} data-size={talle}
              onClick={()=> handleTallesClick(talle)}>{talle}</button>
          ))}
      </div>
      <p className='stock'></p>
    </div>
  );
}

export default Talles