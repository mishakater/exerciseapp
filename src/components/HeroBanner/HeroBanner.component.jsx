import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroImage from "../../assets/assets/images/banner.jpg";
import "../../index.css";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "40px", xs: "20px" },
        ml: { xs: "15%", sm: "50px", lg: "200px" },
        position: "relative",
        minHeight: { xs: "100px", lg: "500px" },
      }}
    >
      <Typography
        sx={{
          color: "red",
          fontSize: "26px",
          fontWeight: "600",
        }}
      >
        Fitness club
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          lineHeight: "35px",
        }}
      >
        Check out the most effective excercises
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#excercises'
        sx={{
          mt: "30px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        sx={{
          fontWeight: "700px",
          opacity: "0.2",
          display: { xs: "none", lg: "block" },
          fontSize: "200px",
          color: "#ff2625",
          position: "absolute",
          top: "260px",
          left: "10px",
        }}
      >
        Exercise
      </Typography>
      <img className='hero-banner' src={HeroImage} alt='banner' />
    </Box>
  );
};

export default HeroBanner;
