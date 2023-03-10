import React from 'react'
import { Box, Typography, Link } from "@mui/material";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast'

const Navbar = () => {

  const loggedIn = JSON.parse(localStorage.getItem('authToken'))
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout")
      localStorage.removeItem("authToken")
      toast.success("logout succesfully")
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      width={"100%"}
      //   backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      {/* <Typography variant="h1" color="primary" fontWeight="bold">
        AI GPT3 Clone
      </Typography> */}
      <div style={{display:"flex",justifyContent:"space-between", textAlign:"center", alignItems:"center"}}>


        <div >
          <NavLink to='/'><img style={{ width: "70px", height: "70px" }} src="https://static.vecteezy.com/system/resources/previews/013/658/474/original/openai-clip-art-icon-vector.jpg" alt="" /></NavLink>
          
        </div>
        <div style={{padding:"22px",textDecoration:"none"}}>
          {
            loggedIn ? (
              <div>

                <NavLink to='/login' onClick={handleLogout} p={1}>
                  Logout
                </NavLink>

              </div>

            ) : (
              <div >

                <NavLink style={{textDecoration:"none",color:"black",padding:"10px"}} to='/register' p={1}>
                  Sign up
                </NavLink>
                <NavLink style={{textDecoration:"none",color:"black",padding:"10px"}} to='/login' p={1}>
                  Sign in
                </NavLink>
              </div>
            )
          }
        </div>
      </div>
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