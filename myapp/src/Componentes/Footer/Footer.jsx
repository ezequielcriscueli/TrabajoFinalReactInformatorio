import React from 'react'
import "./Footer.css"
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

const navItems = ["Asistencia", "Colecciones", "Información", "Tiendas"];
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
function Footer() {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        borderTop: "1px solid #ECEADA",
      }}
    >
      <div className="footer">
        <div className="linksfooter">
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "black" }}>
              {item}
            </Button>
          ))}
        </div>
        <div></div>
        <div className="redesfooter">
          <a href="https://www.facebook.com/" target="blank">
            <AiOutlineFacebook />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.youtube.com/" target="blank">
            <AiOutlineYoutube />
          </a>
        </div>
        <a className="wpp" href="https://web.whatsapp.com/" target="blank">
          <AiOutlineWhatsApp />
        </a>
      </div>
    </Box>
  );
}

export default Footer