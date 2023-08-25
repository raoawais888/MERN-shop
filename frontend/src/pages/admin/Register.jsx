import React from 'react'
import {useFormik} from "formik"
import registerValidation from "../../Schemas/index"
import callApi from '../../api'
import {useDispatch , useSelector} from "react-redux";
import { setotp } from '../../store/slice/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';  
import {loaderChange} from "../../store//slice/loaderSlice"
import Loader from '../../components/admin/Loader';
const Register = () =>
 {
    const navigate = useNavigate();
    const {status} = useSelector((state)=>state.loader);

    const dispatch = useDispatch();
  
    const initialValues = {
      name: "",
      email: "",
      password: "",
    };
    
    const { values, handleChange, handleSubmit , errors } = useFormik({
      initialValues: initialValues, // Corrected spelling here
      validationSchema:registerValidation.register,
      onSubmit: async (values) => {
        
        dispatch(loaderChange(true))
        const header = "Content-Type: application/json"
        const response = await callApi("/register","POST",header,values);
     
        dispatch(setotp(response));
                  
        if(response.status == 200){
            dispatch(loaderChange(false))
            toast.success("Please Check Your email")
            setTimeout(()=>{
                navigate("/otp");
            },2000)
        }else{
            dispatch(loaderChange(false))
            toast.error("Something Wrong ")
        }
        

      },
    });

  
  return (
    status ? <Loader /> :
   <>
     <div className="main-wrapper"> 
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
            style={{background:"url(assets/images/big/auth-bg.jpg) no-repeat center center"}}>
            <div className="auth-box row">
                <div className="col-lg-7 col-md-5 modal-bg-img" style={{backgroundImage: "url(assets/images/big/3.jpg)"}}>
                </div>
                <div className="col-lg-5 col-md-7 bg-white">
                    <div className="p-3">
                        <div className="text-center">
                            <img src="assets/images/big/icon.png" alt="wrapkit" />
                        </div>
                        <h2 className="mt-3 text-center">Sign Up for Free</h2>
                      
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                   
                                        <input className="form-control" name='name' type="text"
                                            placeholder="enter your username" onChange={handleChange} value={values.name} />

                                            <span className='text-danger'>{errors.name}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                  
                                        <input className="form-control" name="email" type="email"
                                            placeholder="enter your email" onChange={handleChange}  value={values.email} />
                                             <span className='text-danger'>{errors.email}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                      
                                        <input className="form-control" name='password'  type="password"
                                            placeholder="enter your password" onChange={handleChange} value={values.password}  />
                                             <span className='text-danger'>{errors.password}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn btn-block btn-dark">Sign In</button>
                                </div>
                                <div className="col-lg-12 text-center mt-5">
                                   Already  have an account? <NavLink to="/login" className="text-danger">Sign IN</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
      {/* Login box  */}
    </div>
    <ToastContainer />
   </>
  )
}

export default Register