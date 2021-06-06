import {useState,useEffect} from 'react'

const useForm = (callback, validate) =>{
    const [values,setValues]=useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const [errors,setErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false)
    const handleChange =(e)=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values))
        setisSubmit(true)
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmit){
            callback();
        }
    },[errors])
    return {handleChange,values,handleSubmit,errors,isSubmit}
}
export default useForm;