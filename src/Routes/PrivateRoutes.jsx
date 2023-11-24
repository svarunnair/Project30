import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

function PrivateRoutes() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>


      </Routes>
    </div>
  )
}

export default PrivateRoutes