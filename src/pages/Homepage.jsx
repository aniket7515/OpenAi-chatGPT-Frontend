import React from 'react'
import {Box,Typography, Card, Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {DescriptionRounded, FormatAlignLeftOutlined} from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feature from '../components/Feature'



const Homepage = () => {
  const loggedIn = JSON.parse(localStorage.getItem('authToken'))
  const navigate = useNavigate()
  return (
    <>
    <div style={{marginTop:"100px"}}>
      <Header/>
    </div>
    <div>
      <Feature/>
    </div>
    <div className='container' style={{display:'flex', flexDirection:'row',justifyContent:"space-between", flexWrap:"wrap"}} >
     <Box>
        {/* <Typography variant='h4' mb={2} fontWeight="bold">
          Text Generation
        </Typography> */}
        <Card className="cardnew" onClick={()=> loggedIn==true? navigate('/summary'):navigate('/')} sx={{boxShadow:2,borderRadius:5,height:390, width:350, textAlign:"center", padding:"12px" , marginBottom:"20px" , cursor:"pointer" }}>
          {/* <DescriptionRounded sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/> */}
          <img src="https://preview.uideck.com/items/cryptoland/assets/images/features/xfeature-icon-1.png.pagespeed.ic.h3D7JPwMSt.webp" alt="" />
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5" style={{ color:"#3b368c"}} >Text Summary</Typography>
              <p >Summarize long text into short sentences</p>
          </Stack>
        </Card>
    </Box>

    <Box>
        {/* <Typography variant='h4' mb={2} fontWeight="bold">
          Paragraph
        </Typography> */}
        <Card className="cardnew" onClick={()=> loggedIn==true? navigate('/paragraph'):navigate('/')} sx={{boxShadow:2,borderRadius:5,height:390, width:350, textAlign:"center", padding:"12px" , marginBottom:"20px", cursor:"pointer" }}>
          {/* <FormatAlignLeftOutlined sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/> */}
          <img src="https://preview.uideck.com/items/cryptoland/assets/images/features/xfeature-icon-1.png.pagespeed.ic.h3D7JPwMSt.webp" alt="" />
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5" style={{ color:"#3b368c"}}>Text Summary</Typography>
              <p>Generate paragraph with words</p>
          </Stack>
        </Card>
    </Box>
              
    <Box>
        {/* <Typography variant='h4' mb={2} fontWeight="bold">
          AI ChatBot
        </Typography> */}
        <Card className="cardnew" onClick={()=> loggedIn==true? navigate('/chatbot'):navigate('/')} sx={{boxShadow:2,borderRadius:5,height:390, width:350, textAlign:"center", padding:"12px" , marginBottom:"20px", cursor:"pointer"}}>
          {/* <FormatAlignLeftOutlined sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/> */}
          <img src="https://preview.uideck.com/items/cryptoland/assets/images/features/xfeature-icon-1.png.pagespeed.ic.h3D7JPwMSt.webp" alt="" />
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5" style={{ color:"#3b368c"}}>Chat with AI BOT</Typography>
              <p variant="h6">Generate paragraph with words</p>
          </Stack>
        </Card>
    </Box>

    <Box>
        {/* <Typography variant='h4' mb={2} fontWeight="bold">
          Js Converter
        </Typography> */}
        <Card className="cardnew" onClick={()=> loggedIn==true? navigate('/js-converter'):navigate('/')} sx={{boxShadow:2,borderRadius:5,height:390, width:350, textAlign:"center", padding:"12px" , marginBottom:"20px" , cursor:"pointer"}}>
          {/* <FormatAlignLeftOutlined sx={{fontSize:'80',color:'primary-main', mt:2, ml:2}}/> */}
          <img src="https://preview.uideck.com/items/cryptoland/assets/images/features/xfeature-icon-1.png.pagespeed.ic.h3D7JPwMSt.webp" alt="" />
          <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5" style={{ color:"#3b368c"}}>Js Converter</Typography>
              <p>Transate english toh Js code </p>
          </Stack>
        </Card>
    </Box>



    </div>

<div>
  <Footer/>
</div>

    </>
   
  )
}

export default Homepage