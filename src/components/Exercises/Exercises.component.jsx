import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard/ExerciseCard.component";
import Preloader from "../Preloader/Preloader.component";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1400, behavior: "smooth" });
  };
  return (
    <Box id='exercises' sx={{ mt: { lg: "20px" } }} mt='20px' p='20px'>
      <Typography variant='h3'>Showing results</Typography>

      <Stack
        direction='row'
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        justifyContent='center'
        flexWrap='wrap'
        p='50px 0'
      >
        {currentExercises.length ? (
          currentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))
        ) : (
          <Preloader />
        )}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
            size='large'
            count={Math.ceil(exercises.length / exercisesPerPage)}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
