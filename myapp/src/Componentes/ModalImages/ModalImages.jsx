import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./ModalImages.css"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
};

function ModalImages({ imgPath }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal-images"> 
      <img
        className="images"
        src={imgPath}
        alt=""
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal">
            <img className="imgModal" src={imgPath} alt="" />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalImages;
