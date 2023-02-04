import React ,{useState} from 'react'
import '../Login/Login.css';
import Image from '../../Image/logo-only.svg'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [cpassword,setcpassword]=useState('');

  const onsubmit = async () => {

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(cpassword);
    let result = await fetch("https://localhost:8000/register", {
        method: 'post',
        body: JSON.stringify({ name, email, password}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    result = await result.json();
    console.warn(result);

    Navigate('/');
}
  

  return (
    <div className="Head">
    <Navbar/>
    <div className="Login" style={{height:'700px'}}>
        <div className="logo">
            <img src={Image} className="logo-imag1" alt="Logo"></img>
        </div>
             <div className="form">
             <input type="text" placeholder="UserName" className="input" value={name} onChange={(e)=>setname(e.target.value)}></input>
             <input type="password" placeholder="Pasword" className="input" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
             <input type="password" placeholder="Confirm-Pasword" className="input" value={cpassword} onChange={(e)=>setcpassword(e.target.value)}></input>
             <input type="email" placeholder="E-mail address" className="input" value={email} onChange={(e)=>setemail(e.target.value)}></input>
             <button onClick={onsubmit} className="Button" type="button">Sign Up</button>
             </div>
        <div className="other">
            <Link to='/login'><div className="Forgot" style={{alignContent:'center'}}>Have an account?Sign In</div></Link>
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