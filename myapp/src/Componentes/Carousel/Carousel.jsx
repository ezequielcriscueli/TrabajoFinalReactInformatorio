import React from 'react'
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import "./Carousel.css"
import ModalImages from '../ModalImages/ModalImages';


const images = [
  {
    imgPath:
      "/product1.jpg",
  },
  {
    imgPath:
      "/product2.jpg",
  },
  {
    imgPath:
      "product3.jpg",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ position: "relative", flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
                <ModalImages imgPath={step.imgPath} /> ) : null}
                <Box
                  className="images"
                  component="img"
                  sx={{
                    height: "100%",
                    display: "block",
                    overflow: "hidden",
                    maxWidth: "1%",
                    maxHeight: "1%"
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />         
          </div>
        ))}
      </SwipeableViews>
      <Paper
        square
        elevation={0}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
          bgcolor: "transparent",
        }}
      >
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <Typography>{images[activeStep].label}</Typography>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </Paper>
    </Box>
  );
}

export default Carousel