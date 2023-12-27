import React from 'react'
import { useState } from 'react';
import "./Header.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import {
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import OpcionesCat from '../OpcionesCat/OpcionesCat';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCarrito } from '../CarritoContext/CarritoContext';



const drawerWidth = 240;
const navItems = ["Inicio", "Productos"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { carritoCount } = useCarrito();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        STORE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          color: "black",
          borderBottom: "1px solid #ECEADA",
        }}
      >
        <Toolbar className="logo">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src="./store.png" alt="" />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <div className="header">
              <div className="links">
                {navItems.map((item) => (
                  <Button
                    className="btnlinks"
                    key={item}
                    sx={{ color: "black" }}
                  >
                    {item}
                  </Button>
                ))}
                <OpcionesCat />
              </div>

              <div className="icons">
                <a href="">
                  <AiOutlineSearch />
                </a>
                <a href="#" className="heart">
                  <AiOutlineHeart />
                </a>
                <a href="">
                  <Badge color="secondary" badgeContent={carritoCount}>
                    <ShoppingCartIcon />
                  </Badge>
                </a>
              </div>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default Header