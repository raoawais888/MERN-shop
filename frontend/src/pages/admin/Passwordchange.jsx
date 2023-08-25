import { useFormik } from "formik"
import passwordValidation  from "../../Schemas/index"
import callApi from '../../api'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate ,useParams} from 'react-router-dom';
import { useEffect } from "react";

const Passwordchange = () => {
    const navigate = useNavigate();
    const {id , expire } = useParams();

       useEffect(()=>{
            if(Date.now() > expire){
             navigate("/")
            }

       },[])

   const initialValues = {
    password:"",
    c_password:"",
   }
        const {errors,values,handleChange,handleSubmit} = useFormik({
             initialValues,
             validationSchema:passwordValidation.password_reset,
             onSubmit:async (values)=>{

                const data = {
                    _id:id,
                    expire:expire,
                    password:values.password
                }
                const header = {
                    "Content-Type":"application/json"
                }

                const response = await callApi("/password_reset" ,"POST",header,data);
                if(response.status== 200){
                    toast.success(`${response.message}`);
                    setTimeout(()=>{
                         navigate("/login")
                    },2000) 

                }else{
                    toast.error(`${response.message}`); 
                }



             }
          })


     console.log(errors);
  return (
    <>
     
    <div className="main-wrapper"> 
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
          style={{background:"url(/assets/images/big/auth-bg.jpg) no-repeat center center"}}>
          <div className="auth-box row">
              <div className="col-lg-7 col-md-5 modal-bg-img" style={{backgroundImage: "url(/assets/images/big/3.jpg)"}}>
              </div>
              <div className="col-lg-5 col-md-7 bg-white">
                  <div className="p-3">
                      <div className="text-center">
                          <img src="/assets/images/big/icon.png" alt="wrapkit" />
                      </div>
                      <h2 className="mt-3 text-center">Reset Your Password</h2>
                    
                      <form className="mt-4" onSubmit={handleSubmit}>
                          <div className="row">
                           
                              <div className="col-lg-12">
                                  <div className="form-group">
                                      <label className="text-dark" htmlFor="uname">New  Password</label>
                                      <input className="form-control" name="password"  id="uname" type="password"
                                          placeholder="New Password" onChange={handleChange} value={values.password}  />
                                          <span className="text-danger">{errors.password}</span>

                                         
                                  </div>
                              </div>
                            
                              <div className="col-lg-12">
                                  <div className="form-group">
                                      <label className="text-dark" htmlFor="uname">Confirm  Password</label>
                                      <input className="form-control" name="c_password"  id="uname" type="password"
                                          placeholder="Confirm Password" onChange={handleChange} value={values.c_password} />
                                          <span className="text-danger">{errors.c_password}</span>

                                         
                                  </div>
                              </div>
                              <div className="col-lg-12 text-center">
                                  <button type="submit" className="btn btn-block btn-dark">Reset Password</button>
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

export default Passwordchange