import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Form.css'
import '../App.css'
import wave from '../assets/wave.png'
import avatar from '../assets/avatar.svg'
import bg from '../assets/bg.svg'

const Signup = () => {




  return (
    <>

      <img className="wave" src={wave} />
      <div className="containerform">
        <div className="imgform">
          <img src={bg} />
        </div>
        <div className="login-content">
          <form action="#">
            <img src={avatar} />
            <h2>Welcome</h2>
            <div className="input-div">
              <i className="fas fa-user"></i>
              <input className="input" type="text" placeholder="Firstname" />

            </div>
            <div className="input-div">
              <i className="fas fa-user"></i>
              <input className="input" type="text" placeholder="Lastname" />
            </div>
            <div className="input-div">
              <i className="fas fa-lock"></i>
              <input className="input" type="password" placeholder="Password" />
            </div>
            <div className="input-div">
              <i className="fas fa-lock"></i>
              <input className="input" type="password" placeholder="Confirm password" />

            </div>

            <input type="submit" className="btnform" value="Signup" />

          </form>

        </div>
      </div>
    </>
  );
};

export default Signup;