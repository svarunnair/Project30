import React, { useState } from 'react'
import { getAuth,signInWithPhoneNumber } from 'firebase/auth'

import { FirebaseApp } from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'
import { getData } from '../Redux/data/action'
import { Box, Button, Input, styled } from '@mui/material'
import { yellow } from '@mui/material/colors'
import { ViewColumn } from '@mui/icons-material'
import theme from '../Theme'
import { Img, grid } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const Container=styled(Box)(({theme})=>({
  display:'flex',
  fontFamily:"serif",
  fontSize:'30px',
  justifyContent:"center",
  width:"200px",
  height:"200px",
  flexDirection:'column' ,
  
  
  [theme.breakpoints.down('xl')]:{
    display:'flex',
    fontFamily:"serif",
    fontSize:'26px',
    width:"170px",
  height:"170px",
  },
  [theme.breakpoints.down('lg')]:{
    display:'flex',
    fontFamily:"serif",
    fontSize:'20px',
    width:"120px",
  height:"120px",
  },
  [theme.breakpoints.down("md")]:{
    
  }
}))

const MainContainer=styled(Box)(({theme})=>({
  border:"1px solid black",
  justifyItems:'center',
  justifyContent:'center',
  display:"grid",

  gap:"10px",
  
  
  
  
  [theme.breakpoints.down('xl')]:{

  },
  [theme.breakpoints.down ('md')]:{

  },
}))

const ImageBox=styled(Box)(({theme})=>({
    width:"200px",
    height:"200px",
    
    
  [theme.breakpoints.down('xl')]:{

  }
}))


const Boxwrap=styled(Box)(({theme})=>({

  display:'grid',
  flexDirection:'column',
  gridTemplateColumns:"repeat(3,1fr)",
  gap:"10px",

  [theme.breakpoints.down('xl')]:{

  },
  [theme.breakpoints.down('lg')]:{

  },
  [theme.breakpoints.down('md')]:{

  },
  [theme.breakpoints.down('xs')]:{

  },[theme.breakpoints.down('sm')]:{

  },
}))

const ButtonBox=styled((Button))(({theme})=>({
  
  [theme.breakpoints.down('xl')]:{

  },

}))


function Home() { 

  const mainData=useSelector((store)=>store.data.data)
  const error=useSelector((store)=>store.data.error)
  const dispatch=useDispatch()
  const params=useParams()
  const [search,setSearch]=useState([])

  console.log("params",params)

  console.log("mainData",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  useEffect(()=>{
   setSearch(mainData)
  },[mainData])


 

  useEffect(()=>{

    let sortData=mainData.filter(item=>item.name.toLowerCase().includes(params.value))
    setSearch(sortData)
  },[params])


  return (

    <>
     

    <Img src='data:image/png;base64,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'/><br/>
   
    <Boxwrap>

      
    
    {search.map((item)=>(
      <MainContainer>

      <Container>
      {item.name}
      </Container>

      <ImageBox as={'img'} src={item.image} ></ImageBox>
      <ButtonBox>Add to cart</ButtonBox>
      
      
      </MainContainer>
    ))}
    
    </Boxwrap>

    </>
  )
}

export default Home