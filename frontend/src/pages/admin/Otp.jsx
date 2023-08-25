import { useFormik } from "formik"
import otpValidation from "../../Schemas/index"
import callApi from '../../api'
import { useDispatch , useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { loaderChange } from "../../store/slice/loaderSlice";
import Loader from "../../components/admin/Loader";

    const Otp = () => {
    const navigate = useNavigate();
    const {otp} = useSelector((state)=>state.auth);
    const {status} = useSelector((state)=>state.loader);
    const dispatch = useDispatch();

    const initialValues = {
        otp:""
    }

    const {handleChange , handleSubmit , values, errors}  =useFormik({
        initialValues:initialValues,
        validationSchema:otpValidation.otp,
        onSubmit: async(values)=>{
            dispatch(loaderChange(true))
             
            const data = {
                name:otp.name,
                otp:values.otp,
                email:otp.email,
                hash:otp.hash,
                password:otp.password
            }
            const header = "Content-Type: application/json"
            const response = await callApi("/verify-otp","POST",header,data);
            
            if(response.status == 200){
                dispatch(loaderChange(false))
                toast.success(`${response.message}`)
                setTimeout(()=>{
                    navigate("/login");
                },2000)
                
            }else{
                 setTimeout(()=>{
                    dispatch(loaderChange(false))
                 },2000)
                 setTimeout(()=>{
                    toast.error(`${response.message}`)
                 },2200)
                

            
               
            }
        }
    })

    

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
                        <h2 className="mt-3 text-center">OTP Code</h2>
                      
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="row">
                             
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="text-dark" htmlFor="uname">Enter OTP Code</label>
                                        <input className="form-control" name="otp" onChange={handleChange} value={values.otp} id="uname" type="number"
                                            placeholder="enter your OTP" />

                                            <span className="text-danger">{errors.otp}</span>
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

export default Otp