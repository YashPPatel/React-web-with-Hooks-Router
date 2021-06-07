import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import signup from '../assets/signup.jpg'
import './Form.css'

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
        <h1>hello</h1>
           <img className='form-img' src={signup} /> 
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
