import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../../components/Exercises/Exercises.component";
import HeroBanner from "../../components/HeroBanner/HeroBanner.component";
import SearchExercises from "../../components/SearchExercises/SearchExercises.component";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
