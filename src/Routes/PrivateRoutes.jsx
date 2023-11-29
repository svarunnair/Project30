import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Dashboard from '../Pages/DashBoard'
import Cart from '../Pages/Cart'

function PrivateRoutes() {

  let token=localStorage.getItem('token')
  return (
    <div>

      <Routes>

        <Route path='/' element={token&&<Home/>}/>
        <Route path='/home/:value' element={token&&<Home/>}/>
        <Route path='/home' element={token&&<Home/>}/>
        <Route path='/cart' element={token&&<Cart/>}/>
        


      </Routes>
    </div>
  )
}

export default PrivateRoutes