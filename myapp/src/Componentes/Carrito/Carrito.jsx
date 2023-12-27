import React, { useState, useEffect } from "react";
import { useCarrito } from "../CarritoContext/CarritoContext";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import "../Carrito/Carrito.css";

const Carrito = () => {
  const { incrementCarritoCount } = useCarrito();
  const [compra, setCompra] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const button = document.querySelector(".btn");
    if (button) {
      button.disabled = !!error;
    }
  }, [error]);

  const handleBuy = () => {
    const selectedTalle = document.querySelector(".talles button.active");
    const stockDisponible = document.querySelector(".stock").innerHTML;

    if (!selectedTalle) {
      setError("Por favor, seleccione un talle para poder realizar la compra.");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else if (stockDisponible.trim() === "Sin stock") {
      setError("Lo sentimos, no hay stock disponible.");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setCompra(true);
      incrementCarritoCount();
      setTimeout(() => {
        setCompra(false);
      }, 4000);
    }
  };

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <ButtonGroup>
        <Button
          className="btn"
          aria-label="increase"
          onClick={() => {
            if (!error) {
              handleBuy();
            }
          }}
          disabled={!!error}
        >
          Comprar
        </Button>
      </ButtonGroup>
      {error && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error" onClose={() => setError("")}>
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        </Stack>
      )}
      {compra && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success" onClose={() => setCompra(false)}>
            <AlertTitle>Compra realizada con éxito</AlertTitle>
            ¡Gracias por su compra!
          </Alert>
        </Stack>
      )}
    </Box>
  );
};

export default Carrito;
