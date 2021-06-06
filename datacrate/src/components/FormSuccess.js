import React from 'react'
import welcome from '../assets/welcome.jpg'

function FormSuccess() {
    return (
        <div className="form-content-right">
            <div className="form-success">Congratulations! You are registered now!</div>
            <img src={welcome} className="form-img-2"/>
        </div>
    )
}

export default FormSuccess
