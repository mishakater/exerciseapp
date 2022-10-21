import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  fetchData,
  exerciseOptions,
  youtubeOptions,
} from "../../utils/fetchData";
import { useParams } from "react-router-dom";

import Details from "../../components/Details/Details.component";
import ExerciseVideos from "../../components/ExerciseVideos/ExerciseVideos.component";
import SimilarExercises from "../../components/SimilarExercises/SimilarExercises.component";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [youtubeData, setYoutubeData] = useState([]);
  const [targetMuscleData, setTargetMuscle] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailsData);

      const youtubeVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,
        youtubeOptions
      );

      setYoutubeData(youtubeVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
        exerciseOptions
      );
      setTargetMuscle(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
        exerciseOptions
      );
      setEquipmentData(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <>
      <Box>
        <Details exerciseDetails={exerciseDetails} />
        <ExerciseVideos
          exerciseVideos={youtubeData}
          name={exerciseDetails.name}
        />
        <SimilarExercises
          sameMuscleExercises={targetMuscleData}
          sameEquimpentExcercises={equipmentData}
        />
      </Box>
    </>
  );
};

export default ExerciseDetails;
