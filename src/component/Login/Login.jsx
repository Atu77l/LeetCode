import React from 'react'
import './Login.css';
import Image from '../../Image/logo-only.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Login = () => {
  return (
    <div className="Login">
    
        <div className="logo">
            <img src={Image} className="logo-imag1" alt="Logo"></img>
        </div>

             <div className="form">
             <input type="text" placeholder="UserName or Email" className="input"></input>
             <input type="password" placeholder="Pasword" className="input"></input>
             <input type="submit" placeholder="Sign-In" className="input-submit"></input>
             </div>
        <div className="other">
            <div className="Forgot">Forgot Password?</div>
            <div className="sign-up">Sign Up</div>
        </div>
        <div className="write">or you can sign in with</div>
        <div className="statement">
            <p>This site is protected bu reCAPTCHA and the Google <br></br><u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
        </div>
    </div>
  )
}

export default Login