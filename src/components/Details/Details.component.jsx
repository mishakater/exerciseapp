import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../../assets/assets/icons/body-part.png";
import TargetImage from "../../assets/assets/icons/target.png";
import EquipmentImage from "../../assets/assets/icons/equipment.png";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='details-img' />
      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
        }}
      >
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform='capitalize'
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color='#4F4C4C'
        >
          Exercises keep you strong.
          <br />
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetails.map((item) => (
          <Stack key={item.name} gap='24px' alignItems='center' direction='row'>
            <Button
              sx={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                background: "#fff2bd",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={item.icon}
                alt={item.name}
              />
            </Button>
            <Typography
              variant='h6'
              fontWeight='700'
              sx={{
                textTransform: "capitalize",
              }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
