import React from 'react'
import './App.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Login from './../src/component/Login/Login.jsx'
import Register from '../src/component/Register/Register.jsx'
import Home from '../src/component/Home/Home.jsx'

function App() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/login" element={<Login/>} exact />
          <Route path="/Register" element={<Register/>} exact/>
      </Routes>
    </BrowserRouter>
    )
}

export default App
