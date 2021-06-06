export default function ValidateIp(values){
    let errors={}

    if(!values.username.trim()){
        errors.username="Username required"
    }

    if(!values.email){
        errors.email="Email required"
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Please enter valid email"
    }

    if(!values.password){
        errors.password="Password required"
    }
    else if(values.password.lenghth<6){
        errors.password="Password lenghth should be more than 6 characters "
    }

    if(!values.cpassword){
        errors.cpassword="Password required"
    }
    else if(values.password !== values.cpassword){
        errors.cpassword="Password do not match!"
    }
    else if(values.password.lenghth<6){
        errors.password="Password lenghth should be more than 6 characters "
    }
    return errors
}


