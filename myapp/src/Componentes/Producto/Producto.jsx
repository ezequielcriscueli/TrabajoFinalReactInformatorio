import React from 'react'
import "./Producto.css"
import Carousel from '../Carousel/Carousel';
import Detalles from '../Detalles/Detalles';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Producto() {
  return (
    <div className="producto">
      <Grid        
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, md: 12 }}
      >
        <Grid className="grid" item xs={6}>
          <Item sx={{ boxShadow: "none" }}>
            <Carousel />
          </Item>
        </Grid>
        <Grid className="grid" item xs={6}>
          <Item sx={{ boxShadow: "none" }}>
            <Detalles />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Producto