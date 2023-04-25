import { useState } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from './components/Header'
import {Home} from './components/Home'
import {Login} from './components/Login'
import {Signup} from './components/Signup'
import {Update} from './components/Update'


import './App.css'
import { Detail } from './components/Detail'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/update/:id" element={<Update/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>


    </Routes>
      
    </BrowserRouter>
    </>

  )
}

export default App
