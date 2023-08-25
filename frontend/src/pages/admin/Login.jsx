import { useFormik } from "formik"
import loginValidation  from "../../Schemas/index";
import callApi from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/slice/authSlice";


      const initialValues = {
        email:"",
        password:""
      }

const Login = () => {
    const dispath = useDispatch();
const navigate = useNavigate();
const {errors,values,handleChange,handleSubmit} =        useFormik({
            initialValues,
            validationSchema:loginValidation.login,
            onSubmit: async(values)=>{
                const header ={
                    "Content-Type":"application/json"
                }
               const response = await  callApi("/login","POST",header , values);

                 const token = response.token;

                 localStorage.setItem('token',token);
                 
                 if(response.status == 200){
                    dispath(setAuth(true));
                    toast.success(`${response.message}`)
                    setTimeout(()=>{
                        navigate("/dashboard");
                    },2000)
                 }else{
                    toast.error(`${response.message}`)
                 }
            }


        })
        console.log(errors);

  return (
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
                        <h2 className="mt-3 text-center">Sign IN</h2>
                      
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="row">
                             
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="text-dark" htmlFor="uname">Email</label>
                                        <input className="form-control" id="uname" name="email" type="email"
                                            placeholder="enter your email" onChange={handleChange} value={values.email} />
                                            <span className="text-danger">{errors.email}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="text-dark" htmlFor="pwd">Password</label >
                                        <input className="form-control" id="pwd" name="password" type="password"
                                            placeholder="enter your password"  onChange={handleChange} value={values.password} />
                                            <span className="text-danger">{errors.password}</span>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn btn-block btn-dark">Sign In</button>
                                </div>
                                <div className="col-lg-12 text-center mt-5">
                                   Don't  have an account? <NavLink to="/register" className="text-danger">Sign UP</NavLink>
                                </div>
                                <div className="col-lg-12 text-center">
                                   Forgot Password? <NavLink to="/reset" className="text-danger">reset</NavLink>
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

export default Login