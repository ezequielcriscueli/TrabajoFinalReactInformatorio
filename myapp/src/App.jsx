import "./App.css";
import { useState } from "react";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header"
import Producto from "./Componentes/Producto/Producto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Producto />
      <Footer />
    </>
  );
}

export default App;
