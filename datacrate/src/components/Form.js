import React, { useEffect , useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import './Form.css'
import '../App.css'
import wave from '../assets/wave.png'
import avatar from '../assets/avatar.svg'
import bg from '../assets/bg.svg'
import ScriptTag from 'react-script-tag'
const Form = () => {
  <ScriptTag type="text/javascript" src="./components/Formjs.js" />
  // const [username, setUsername] = useState("");
  // const usernameRef =useRef(null);
  // useEffect(() => {
  //   usernameRef.current && usernameRef.current.focus();
  // }, [])

  // const onChangeusername = (e) => {
  //   setUsername(e.target.value);
  // };

  
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
                
              <input className="input" type="text" placeholder="Username"/>
              </div>
            </div>
            <div className="input-div">
              <div className="iform">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                
                <input className="input" type="password" placeholder="Password" />
              </div>
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