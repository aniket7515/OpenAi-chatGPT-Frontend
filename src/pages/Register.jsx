import React,{useState} from 'react'
import { Box , Typography, useTheme, useMediaQuery, TextField, Button,Alert,Collapse} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'

const Register = () => {

  
  const navigate= useNavigate()
  const isNotMobile= useMediaQuery("(min-width: 1000px)")

  const[username, setUsername]= useState("")
  const[email, setEmail]= useState("")
  const[password, setPassword]= useState("")
  const[error, setError]= useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const {data}= await axios.post('/api/v1/auth/register',{username, email, password})
      toast.success("User registered succesfully")
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box  width={isNotMobile? '40%' : '80%'} p={'2rem'} m={'2rem auto'} borderRadius={5} sx={{boxShadow:5}}   >
      <form onSubmit={handleSubmit} action="">
            <Typography variant="h3">Sign Up</Typography>
            <TextField label="username" required margin="normal" fullWidth value={username} onChange={(e)=> setUsername(e.target.value)} />
            <TextField label="email" required margin="normal" fullWidth value={email} onChange={(e)=> setEmail(e.target.value)} />
            <TextField label="password" required margin="normal" fullWidth value={password} onChange={(e)=> setPassword(e.target.value)} />
           
           <Button type='submit' fullWidth variant="contained" size="large" sx={{color:"white", mt:2}} >Sign Up</Button>

            <Typography mt={2}>Already have an account ? <Link to='/login'>Click here</Link> </Typography>
      </form>

    </Box>

  )
}

export default Register