import React from 'react'
import {Box,Typography, Card, Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {DescriptionRounded, FormatAlignLeftOutlined} from '@mui/icons-material'



const Homepage = () => {
  const navigate = useNavigate()
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row'}} >
     <Box>
        <Typography variant='h4' mb={2} fontWeight="bold">
          Text Generation
        </Typography>
        <Card onClick={()=> navigate('/summary')} sx={{boxShadow:2,borderRadius:5,height:290, width:250}}>
          <DescriptionRounded sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/>
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">Text Summary</Typography>
              <Typography variant="h6">Summarize long text into short sentences</Typography>
          </Stack>
        </Card>
    </Box>
    <Box>
        <Typography variant='h4' mb={2} fontWeight="bold">
          Paragraph
        </Typography>
        <Card onClick={()=> navigate('/paragraph')} sx={{boxShadow:2,borderRadius:5,height:290, width:250}}>
          <FormatAlignLeftOutlined sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/>
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">Text Summary</Typography>
              <Typography variant="h6">Generate paragraph with words</Typography>
          </Stack>
        </Card>
    </Box>

    <Box>
        <Typography variant='h4' mb={2} fontWeight="bold">
          AI ChatBot
        </Typography>
        <Card onClick={()=> navigate('/chatbot')} sx={{boxShadow:2,borderRadius:5,height:290, width:250}}>
          <FormatAlignLeftOutlined sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/>
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">Chat with AI BOT</Typography>
              <Typography variant="h6">Generate paragraph with words</Typography>
          </Stack>
        </Card>
    </Box>

    <Box>
        <Typography variant='h4' mb={2} fontWeight="bold">
          Js Converter
        </Typography>
        <Card onClick={()=> navigate('/js-converter')} sx={{boxShadow:2,borderRadius:5,height:290, width:250}}>
          <FormatAlignLeftOutlined sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/>
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">Js Converter</Typography>
              <Typography variant="h6">Transate english toh Js code </Typography>
          </Stack>
        </Card>
    </Box>



    </Box>
    </>
   
  )
}

export default Homepage