import React from 'react'
import useForm from './useForm'
import validate from './ValidateIp'
import './Form.css'
import './Footer.css'

const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us!</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Username" className="form-input" value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}

                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter email" className="form-input" value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" className="form-input" value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Enter Password Again" className="form-input" value={values.cpassword} onChange={handleChange} />
                    {errors.cpassword && <p>{errors.cpassword}</p>}
                </div>
                <button className="form-input-btn" type="submit">Sign Up</button>

                <div className="form-inputs">
                    <h3>-------- Or Signup with --------</h3>
                </div>
                <div>
                    <button className="form-input-sob" ><a href="https://www.accounts.google.com/signin" className="social-icon-link" target="_blank"/><i class='fab fa-google' />                        Sign up using Google</button>
                    <button className="form-input-sobf"><a href="https://www.facebook.com/" className="social-icon-link" target="_blank"/><i class='fab fa-facebook' />                      Sign up using Facebook</button>
                    

                </div>

            
                <span className="form-input-login">Already joined us? <a href="#">Login</a> and explore!</span>
            </form>
            
        </div>
    )
}

export default FormSignup
