import { IconButton, LinkBox, Text } from '@chakra-ui/react'
import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Welcome() {

  const navigate=useNavigate()

  const handleEmail=()=>{
     navigate("/signup")
  }
  const handlePhone=()=>{
    navigate("/phone")
 }
  return (
    <div>
    Welcome

    <LinkBox onClick={handleEmail}>Signup with Email</LinkBox>
    <LinkBox onClick={handlePhone}>Signup with Mobile</LinkBox>
   
   
    </div>
  )
}

export default Welcome