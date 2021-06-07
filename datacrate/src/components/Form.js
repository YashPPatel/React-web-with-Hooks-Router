import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import signup from '../assets/signup.jpg'
import img1 from '../assets/mobileimg.jpg'
import './Form.css'
import '../App.css'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    
    
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
           <img className='form-img' src={signup} />
           <img className='form-mobimg' src={img1} />

        </div>
        {!isSubmitted ? 
          <FormSignup submitForm={submitForm} />
         : 
          <FormSuccess />
        }
      
      </div>
      
      
    </>
  );
};

export default Form;
