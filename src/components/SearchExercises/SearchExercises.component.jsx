import React from "react";
import { useState, useEffect } from "react";

import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import "../../index.css";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import HorisontalScrollbar from "../HorisontalScrollbar/HorisontalScrollbar.component";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearchClick = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          mt: { xs: "30px", xl: "100px" },
          fontSize: "44px",
          fontWeight: "700",
        }}
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box
        sx={{
          position: "relative",
          margin: "72px auto 0",
          width: "78%",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "70%", xs: "100%" },
          }}
          height='76px'
          value={search}
          onChange={handleSearchChange}
          placeholder='Search ...'
          type='text'
        />
        <Button
          className='search-btn'
          variant='contained'
          color='error'
          sx={{
            width: { xs: "8  0px", lg: "175px" },
            textTransform: "none",
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "80%",
          p: "20px",
          m: "0 auto",
        }}
      >
        <HorisontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
