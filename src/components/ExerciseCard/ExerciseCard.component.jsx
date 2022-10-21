import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`exercise/${exercise.id}` }>
      <Stack
        direction='column'
        sx={{
          gap: "40px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          style={{ width: "360px" }}
          src={exercise.gifUrl}
          alt={exercise.name}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {exercise.name}
        </Typography>
        <Stack
          direction='row'
          gap='20px'
          sx={{
            position: "absolute",
            top: "350px",
            left: "0",
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              backgroundColor: "black",
              padding: "5px 10px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "white",
              }}
            >
              {exercise.bodyPart}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "fit-content",
              backgroundColor: "red",
              padding: "5px 10px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "white",
              }}
            >
              {exercise.target}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
