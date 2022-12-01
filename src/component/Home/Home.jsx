import React from 'react'
import Profile from './../Profile/Profile';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default Home