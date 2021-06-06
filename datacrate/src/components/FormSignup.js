import React from 'react'
import useForm from './useForm'
import validate from './ValidateIp'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)
    return (
        <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit}>
               <h1>Get started with us!</h1>
               <div className="form-inputs">
                   <label htmlFor="username" className="form-label">Username</label>
                      <input type="text" name="username" id="username" placeholder="Enter Username" className="form-input" value={values.username} onChange={handleChange}/>
                      {errors.username && <p>{errors.username}</p>}
                   
               </div>
               <div className="form-inputs">
                   <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" name="email" id="email" placeholder="Enter email" className="form-input" value={values.email} onChange={handleChange}/> 
                      {errors.email && <p>{errors.email}</p>}
               </div>
               <div className="form-inputs">
                   <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" name="password" id="password" placeholder="Enter Password" className="form-input" value={values.password} onChange={handleChange}/> 
                      {errors.password && <p>{errors.password}</p>}
               </div>
               <div className="form-inputs">
                   <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                      <input type="password" name="cpassword" id="cpassword" placeholder="Enter Password Again" className="form-input" value={values.cpassword} onChange={handleChange}/> 
                      {errors.cpassword && <p>{errors.cpassword}</p>}
               </div>
               <button className="form-input-btn" type="subit">Sign Up</button> 
               <span className="form-input-login">Already joined us? <a href="#">Login</a> and explore!</span>
           </form>
        </div>
    )
}

export default FormSignup
