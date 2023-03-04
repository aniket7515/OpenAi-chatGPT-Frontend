import React from 'react'
import { Box, Typography, Link} from "@mui/material";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      width={"100%"}
    //   backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        AI GPT3 Clone
      </Typography>
      <NavLink to='/register' p={1}>
        Sign up
      </NavLink>
      <NavLink to='/login' p={1}>
        Sign in
      </NavLink>
      {/* {loggedIn ? (
        <>
          <NavLink to="/" p={1}>
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" p={1}>
            Sign Up
          </NavLink>
          <NavLink to="/login" p={1}>
            Sign In
          </NavLink>
        </>
      )} */}
    </Box>
  )
}

export default Navbar