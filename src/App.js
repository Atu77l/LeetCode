import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer.jsx'
import Login from './component/Login/Login.jsx'
import Register from './component/Register/Register.jsx'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      {/* <Register/> */}
      <Footer/>
    </div>
  )
}

export default App