import { useFormik } from "formik"
import resetValidation  from "../../Schemas/index"
import callApi from '../../api'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Resetpassword = () => {
    const navigate = useNavigate();
        
    const initialValues = {
        email:""
    }

      const {errors , values , handleChange , handleSubmit} =  useFormik({
            initialValues,
            validationSchema:resetValidation.reset,
            onSubmit: async (values)=>{
                const header ={
                    "Content-Type":"application/json"
                }

                const response = await callApi("/reset","POST",header,values);
                  if(response.status == 200){
                    toast.success(`${response.message}`) 
                  }else{
                    
                    toast.error(`${response.message}`)

                  }
            }
        }) 

       


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
                        <h2 className="mt-3 text-center">Opss!!</h2>
                      
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="row">
                             
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="text-dark" htmlFor="uname">Enter Email</label>
                                        <input className="form-control" name="email"  id="uname" type="email"
                                            placeholder="enter your email" value={values.name} onChange={handleChange} />
                                            <span className="text-danger">{errors.email}</span>

                                           
                                    </div>
                                </div>
                              
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn btn-block btn-dark">Send</button>
                                </div>

                                <div className="col-lg-12 text-center mt-5 invisible" >
                                   Forgot Password? <a href="#" className="text-danger">reset</a>
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

export default Resetpassword