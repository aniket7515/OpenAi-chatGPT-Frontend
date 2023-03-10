import React, { useState } from 'react'
import { Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse,Card } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'


const JsConverter = () => {
    const navigate = useNavigate()
    const isNotMobile = useMediaQuery("(min-width: 1000px)")

    const [text, setText] = useState("")
    const [code, setCode] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/openai/js-converter', { text })
            setCode(data)


        } catch (error) {
            console.log(error);
            if (error.response.data.error) {
                setError(error.response.data.error)
            } else if (error.message) {
                setError(error.message)
            }
            setTimeout(() => {
                setError("")
            }, 5000)
        }
    }

    return (
        <Box width={isNotMobile ? '40%' : '80%'} p={'2rem'} m={'2rem auto'} borderRadius={5} sx={{ boxShadow: 5 }}   >
            <Collapse in={error}>
                <Alert severity="error" sx={{ mb: 2 }}> {error} </Alert>
            </Collapse>
            <form onSubmit={handleSubmit} action="">
                <Typography variant="h3">Js Converter</Typography>
                {/* <TextField label="username" required margin="normal" fullWidth value={username} onChange={(e)=> setUsername(e.target.value)} /> */}
                <TextField type="text" multiline={true} required margin="normal" fullWidth value={text} onChange={(e) => setText(e.target.value)} />


                <Button type='submit' fullWidth variant="contained" size="large" sx={{ color: "white", mt: 2 }} >Convert</Button>

                <Typography mt={2}>Not this tool ? <Link to='/'>Click here</Link>Go Back </Typography>
            </form>
            {code ? (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                        overflow:"auto",
                    }}
                >
                    
                    <Typography p={2}>{code}</Typography>
                </Card>
            ) : (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography
                        variant="h5"
                        color="natural.main"
                        sx={{
                            textAlign: "center",
                            verticalAlign: "middel",
                            lineHeight: "450px",
                        }}
                    >
                       your code will appear here
                    </Typography>
                </Card>
            )}

        </Box>

    )

}

export default JsConverter