import React, { useEffect , useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import './Form.css'
import '../App.css'
import wave from '../assets/wave.png'
import avatar from '../assets/avatar.svg'
import bg from '../assets/bg.svg'

const Form = () => {
  
  
  return (
    <>

      <img className="wave" src={wave} />
      <div className="containerform">
        <div className="imgform">
          <img src={bg}/>
        </div>
        <div className="login-content">
          <form action="#">
            <img src={avatar}/>
            <h2>Welcome</h2>
            <div className="input-div">
                <i className="fas fa-user"></i>
                <input className="input" type="text" placeholder="Username"/>
            </div>
            <div className="input-div">
                <i className="fas fa-lock"></i>
                <input className="input" type="password" placeholder="Password" />
            </div>
            <a href="#" className="formlink">Forgot Password?</a>
            <input type="submit" className="btnform" value="login"/>
            <h4>OR</h4>
            <Link to="./Signup" style={{textDecoration:"none"}}><input type="submit" className="btnform" value="Signup" /></Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;