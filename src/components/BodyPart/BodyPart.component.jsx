import { Stack, Typography } from "@mui/material";
import React from "react";

import Icon from "../../assets/assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? "4px solid red" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "180px",
        cursor: "pointer",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1400, left: 100, behavior: "smooth" });
        console.log(item);
      }}
    >
      <img
        src={Icon}
        alt='icon'
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        sx={{
          mt: "15px",
        }}
      >
        {item.toUpperCase()}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
