import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from '../Pages/Welcome'
import PhoneSignin from '../Auth/PhoneSignin'
import Signin from '../Auth/Signin'
import Signup from '../Auth/Signup'


function PublicRoutes() {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Welcome/>}/>
            <Route path='/phone' element={<PhoneSignin/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            
           



        </Routes>
    </div>
  )
}

export default PublicRoutes