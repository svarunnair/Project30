import React, { useState } from 'react'
import { getAuth,signInWithPhoneNumber } from 'firebase/auth'

import { FirebaseApp } from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { getData } from '../Redux/data/action'

function Home() { 

  const mainData=useSelector((store)=>store.data.data)
  const error=useSelector((store)=>store.data.error)
  const dispatch=useDispatch()
   

  console.log("mainData",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])


  return (
    <>
    Home
    {mainData.map((item)=>(
      <>
      {item.name}
      
      </>
    ))}
    </>
  )
}

export default Home