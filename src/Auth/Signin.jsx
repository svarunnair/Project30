import { ButtonGroup } from '@chakra-ui/react'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {

  const navigate=useNavigate()

  const handleHome=()=>{
    navigate('/home')
  }


  return (
    <div>Signin
      <Button onClick={handleHome}>Home</Button>
    </div>
  )
}

export default Signin