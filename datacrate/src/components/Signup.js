import React from 'react';
import {Link} from 'react-router-dom'
import './Form.css'
import '../App.css'
import wave from '../assets/wave.png'
import avatar from '../assets/avatar.svg'
import bg from '../assets/bg.svg'
const Signup = () => {

  const inputs = document.querySelectorAll(".input");


  function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }


  inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });

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
              <div className="iform">
                <i className="fas fa-user"></i>
              </div>
              <div>
                <input className="input" type="text" placeholder="Firstname"/>
              </div>
            </div>
            <div className="input-div">
              <div className="iform">
                <i className="fas fa-user"></i>
              </div>
              <div>
                
                <input className="input" type="text" placeholder="Lastname"/>
              </div>
            </div>
            <div className="input-div">
              <div className="iform">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                
                <input className="input" type="password" placeholder="Password"/>
              </div>
            </div>
            <div className="input-div">
              <div className="iform">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                
                <input className="input" type="password" placeholder="Confirm password"/>
              </div>
            </div>
           
            <input type="submit" className="btnform" value="Signup"/>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;