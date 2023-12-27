import React from 'react'
import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carritoCount, setCarritoCount] = useState(0);

  const incrementCarritoCount = () => {
    setCarritoCount((prevCount) => prevCount + 1);
  };

  return (
    <CarritoContext.Provider
      value={{
        carritoCount,
        incrementCarritoCount,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};