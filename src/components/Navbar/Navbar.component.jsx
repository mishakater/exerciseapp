import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../../assets/assets/images/Logo.png";

const Navbar = () => {
  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        sx={{ justifyContent: "none" }}
      >
        <Link to='/'>
          <img
            className='logo'
            src={Logo}
            alt='logo'
            style={{ width: "150px", margin: "0 25px" }}
          />
        </Link>
        <Stack
          direction='row'
          gap='40px'
          alignItems='flex-end'
          sx={{ fontSize: "24px" }}
        >
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href='#exercises'
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
