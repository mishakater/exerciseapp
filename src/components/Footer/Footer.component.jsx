import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "40px 60px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
        }}
      >
        Created by Misha Katerynych
      </Typography>
    </Box>
  );
};

export default Footer;
