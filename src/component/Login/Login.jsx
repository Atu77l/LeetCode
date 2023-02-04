import React, { useState } from 'react'
import Image from '../../Image/logo-only.svg'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email,setname]=useState('');
  const [password,setpassword]=useState('');
  const navigate = useNavigate();
  
  const onsubmit=()=>{
    console.log(email);
    console.log(password);
    navigate('/');
  }
  
  return (
    <div className="Head">
    <Navbar/>
    <div className="Login">
        <div className="logo">
            <img src={Image} className="logo-imag1" alt="Logo"></img>
        </div>
             <div className="form">
             <input type="text" placeholder="UserName or Email" value={email} onChange={(e)=>setname(e.target.value)}></input>
             <input type="password" placeholder="Pasword" value={password} onChange={(e)=>setpassword(e.target.value)} className="input"></input>
             <button onClick={onsubmit} className="button" type="button">Sign In</button>
             </div>
        <div className="other">
            <div className="Forgot">Forgot Password?</div>
            <Link to='/register'><div className="sign-up">Sign Up</div></Link>
        </div>
        <div className="write">or you can sign in with</div>
        <div className="statement">
            <p>This site is protected bu reCAPTCHA and the Google <br></br><u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login