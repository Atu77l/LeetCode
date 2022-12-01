import React from 'react'
import '../Login/Login.css';
import Image from '../../Image/logo-only.svg'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Register = () => {
  return (
    <div className="Head">
    <Navbar/>
    <div className="Login" style={{height:'700px'}}>
    
        <div className="logo">
            <img src={Image} className="logo-imag1" alt="Logo"></img>
        </div>

             <div className="form">
             <input type="text" placeholder="UserName" className="input"></input>
             <input type="password" placeholder="Pasword" className="input"></input>
             <input type="password" placeholder="Confirm-Pasword" className="input"></input>
             <input type="email" placeholder="E-mail address" className="input"></input>
             <input type="submit" placeholder="Sign-Up" className="input-submit"></input>
             </div>
        <div className="other">
            <div className="Forgot" style={{alignContent:'center'}}>Have an account?Sign In</div>
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

export default Register