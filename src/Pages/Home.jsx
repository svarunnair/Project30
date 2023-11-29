import React, { useState } from 'react'
import { getAuth,signInWithPhoneNumber } from 'firebase/auth'

import { FirebaseApp } from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'
import { getData, postCart } from '../Redux/data/action'
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
  const [data,setData]=useState('')

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

  const handleCart=(item)=>{
    item.quant=1
    dispatch(postCart(item))
  }

  const handleInput=(e)=>{
    let value= e.target.value 
  
    const sortData=mainData.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()))
    setSearch(sortData)
  }

 


  return (

    <>
     <Input onChange={handleInput} placeholder='Search here...' /><br/>

    <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaFfZEWHxpsnYyqpWx_vQec7gsDLH-3LCfQ&usqp=CAU'/><br/>
   
    <Boxwrap>

      
    
    {search.map((item)=>(
      <MainContainer>

      <Container>
      {item.name}
      </Container>

      <ImageBox as={'img'} src={item.image} ></ImageBox>
      <ButtonBox onClick={()=>handleCart(item)}>Add to cart</ButtonBox>
      
      
      </MainContainer>
    ))}
    
    </Boxwrap>

    </>
  )
}

export default Home