
import { Badge, Box, Button, ButtonBase, styled } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import theme from '../Theme'


const Container=styled(Box)(({theme})=>({
  justifyContent:"center",
  justifyItems:"center",
  fontSize:"30px",
  [theme.breakpoints.down('xl')]:{

  },
  [theme.breakpoints.down("lg")]:{

  },
  [theme.breakpoints.down('md')]:{

  },
  [theme.breakpoints.down('sm')]:{

  },
  [theme.breakpoints.down('xs')]:{

  },

}))

const LinkBox=styled(Button)(({theme})=>({
  fontSize:"20px",
  fontWeight:"40px",
  fontFamily:"serif",
  [theme.breakpoints.down('xl')]:{
    fontSize:"18px",
  fontWeight:"40px",
  fontFamily:"fantasy",
  },
  [theme.breakpoints.down("lg")]:{
    fontSize:"12px",
  fontWeight:"30px",
  fontFamily:'serif',

  },
  [theme.breakpoints.down('md')]:{

  },
  [theme.breakpoints.down('sm')]:{

  }

}))

function Welcome() {

  const navigate=useNavigate()

  const handleEmail=()=>{
     navigate("/signup")
  }
  const handlePhone=()=>{
    navigate("/phone")
 }
  return (
    <Container>
    Welcome<br/>

    <LinkBox cursor={'pointer'} sx={{color:'red'}}  onClick={handleEmail}>Signup with Email</LinkBox><br/>
    <LinkBox cursor={'pointer'} sx={{color:'red'}} onClick={handlePhone}>Signup with Mobile</LinkBox>
   
   
    </Container>
  )
}

export default Welcome