import * as Yup from "yup"

class validation {
        
   static register = () =>{
            return  Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          });
    }

  static otp = () =>{
           
    return Yup.object({
      otp: Yup.number().required('OTP is required'),
    })

  }
  static login = () =>{
           
    return Yup.object({
      email: Yup.string().email('invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    })

  }
  static reset = () =>{
           
    return Yup.object({
      email: Yup.string().email('invalid email').required('Email is required')
    })

  }


  static password_reset = ()=>{
        return Yup.object({
          password:Yup.string().min(6).required("Enter password"),
         c_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("confirm password Required")
        })

  }


  }


export default validation;