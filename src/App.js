import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Navbar from "./components/Navbar/Navbar.component";
import Layout from "./components/Layout/Layout.component";
import ExerciseDetails from "./pages/ExerciseDetails/ExerciseDetails.page";
import Footer from "./components/Footer/Footer.component";


function App() {
  return (
    <>
      <Box width='400px' sx={{ width: { xl: "1488px" } }} m='auto'>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
