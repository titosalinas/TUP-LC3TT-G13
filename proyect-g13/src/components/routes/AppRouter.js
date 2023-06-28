import React, {useEffect, useState} from 'react'
import { BrowserRouter ,Switch, Link, Route, Routes, useNavigate } from 'react-router-dom'

import Login from '../Login/Login'
import HomePage from '../HomePage/HomePage'
import SelectDay from '../SelectDay/SelectDay'
import Register from '../Login/Register'
import FinishReserve from '../FinishReserve/FinishReserve'
import OkReserve from '../OkReserve/OkReserve'
import OwnerPanel from '../OwnerPanel/OwnerPanel'
import AdminPanel from '../AdminPanel/AdminPanel'

const AppRouter = () => {
  // const navigate = useNavigate()
  // useEffect(() =>{
  //   let username = sessionStorage.getItem('usuario')
  //   if (username === '' || username === null) {
  //     navigate('/')
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/selectday' element={<SelectDay/>}/>
        <Route path='/finishreserve' element={<FinishReserve/>}/>
        <Route path='/okreserve' element={<OkReserve />}/>
        <Route path='/ownerpanel' element={<OwnerPanel/>}/>
        <Route path='/adminpanel' element={<AdminPanel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter