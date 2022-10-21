import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import HorisontalScrollbar from "../HorisontalScrollbar/HorisontalScrollbar.component";
import Preloader from "../Preloader/Preloader.component";
import "../../index.css";

const SimilarExercises = ({ sameMuscleExercises, sameEquimpentExcercises }) => {
  return (
    <Box>
      <Box>
        <Typography variant='h3' mt='90px'>
          Similar{" "}
          <span
            style={{
              color: "red",
            }}
          >
            muscle group
          </span>{" "}
          exercises
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "90%",
            p: "20px",
            m: "0 auto",
          }}
        >
          {sameMuscleExercises.length ? (
            <HorisontalScrollbar data={sameMuscleExercises} />
          ) : (
            <Preloader />
          )}
        </Box>
      </Box>
      <Box>
        <Typography variant='h3' mt='90px'>
          Similar{" "}
          <span
            style={{
              color: "red",
            }}
          >
            equipment
          </span>{" "}
          exercises
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "90%",
            p: "20px",
            m: "0 auto",
          }}
        >
          {sameEquimpentExcercises.length ? (
            <HorisontalScrollbar data={sameEquimpentExcercises} />
          ) : (
            <Preloader />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SimilarExercises;
