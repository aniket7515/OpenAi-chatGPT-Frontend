import React,{useState} from 'react'
import { Box , Typography, useTheme, useMediaQuery, TextField, Button,Alert,Collapse} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'


const Login = () => {
  const navigate= useNavigate()
  const isNotMobile= useMediaQuery("(min-width: 1000px)")

  const[email, setEmail]= useState("")
  const[password, setPassword]= useState("")
  const[error, setError]= useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await await axios.post('/api/v1/auth/login',{email, password})
      // if(data.token.accessToken){
        // localStorage.setItem("authToken",true)
        toast.success("Login succesfully")
        localStorage.setItem("authToken",true)
        navigate('/')
      // }
      
    } catch (error) {
      console.log(error);
      if(error.response.data.error){
        setError(error.response.data.error)
      }else if(error.message){
        setError(error.message)
      }
      setTimeout(()=>{
        setError("")
      },5000)
    }
  }

  return (
    <Box  width={isNotMobile? '40%' : '80%'} p={'2rem'} m={'2rem auto'} borderRadius={5} sx={{boxShadow:5}}   >
      <Collapse in={error}>
          <Alert severity="error" sx={{mb:2}}> {error} </Alert>
      </Collapse>
      <form onSubmit={handleSubmit} action="">
            <Typography variant="h3">Login here</Typography>
            {/* <TextField label="username" required margin="normal" fullWidth value={username} onChange={(e)=> setUsername(e.target.value)} /> */}
            <TextField label="email" required margin="normal" fullWidth value={email} onChange={(e)=> setEmail(e.target.value)} />
            <TextField label="password" required margin="normal" fullWidth value={password} onChange={(e)=> setPassword(e.target.value)} />
           
           <Button type='submit' fullWidth variant="contained" size="large" sx={{color:"white", mt:2}} >Login</Button>

            <Typography mt={2}>Dont;t have an account ? <Link to='/login'>Click here</Link> </Typography>
      </form>

    </Box>

  )

}

export default Login