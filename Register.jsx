import React from 'react'
import './Register.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
 const Register = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder='username' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder='email' required/>
                <MdEmail className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required/>
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='confirm password' required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
               
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
                <Link to='/'>
                 <a href="#" style={{color:"white"}}>signin</a>
                 </Link>
            </div>
        </form>
    </div>
  );
};
export default Register;
