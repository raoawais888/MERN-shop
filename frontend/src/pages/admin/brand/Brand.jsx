import Master from "../Master"
import { NavLink } from "react-router-dom"
import "./brand.css"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import adminSchema from "../../../Schemas/admin"
import callApi from "../../../api"
import {toast } from 'react-toastify';
import { useSelector , useDispatch } from "react-redux"
import { loaderChange } from "../../../store/slice/loaderSlice"
import Loader from "../../../components/admin/Loader"
import {changeConfirm , informationGet} from "../../../store/slice/confirmSlice"
import Confirm from "../comman/Confirm"




    const Brand = () => {

    const [open , setOpen] = useState(false)
    const [edit , setEdit] = useState(false)
    // const [confirm , setConfirm] = useState(false)
    let [brand,setBrand] = useState([]);
    const [editbrand, setEditBrand] = useState({});
    const dispatch = useDispatch();
    const {status} = useSelector((state)=>state.loader)
    const {confirmstatus } = useSelector((state)=>state.confirm)


      const brandFetch = async () =>{
        try {
            dispatch(loaderChange(true))    
              const header = {
                "Content-Type":"application/json"
              }
            const response = await callApi("/brand","GET",header);

               if(response.status == 200){
                setBrand(response.data);
                dispatch(loaderChange(false)) 
               }
           

        } catch (error) {
            console.log(error);
        }
      }
       
    useEffect(()=>{

        brandFetch();
         
    },[])


    

    const initialValue = {
        name:""
    }


    const {values , errors,handleChange,handleSubmit} =  useFormik({
           initialValues:initialValue,
           validationSchema:adminSchema.brandValidation,
           onSubmit:async (values , { resetForm })=>{
           const header = {
            "Content-Type":"application/json"
           }

           const response = await callApi("/add-brand","POST",header,values);
              if(response.status == 200){

                toast.success(`${response.message}`,{
                    position: "top-center"})
                resetForm();
                brandFetch();

              }else{
                toast.error(`${response.message}`,{
                    position: "top-center"})
                resetForm();
              }
           }

      })
    
     


        //  brand delete  ............................... start  //////

                   const brandDelete = async(id)=>{
                     dispatch(changeConfirm(true))   
                     dispatch(informationGet({endpoint:"brand-delete",id:id}));


                   }
            

        //  brand delete  ............................... end   //////
       

        //   edit brand edit ................................start ////

        const editBranVal = {
          name:editbrand.name
        }

                const editBrand = async (id) =>{
                         const header = {
                            "Content-Type":"application/json"
                         }
                         const data = {
                            id:id
                         }
                    const response = await callApi("brand-edit","POST",header,data); 
                    
                     if(response.status == 200){
                    
                      setEditBrand({ ...editbrand, name: response.data.name });
                      setEdit(true);
                      console.log(editbrand);

                    
                   
                        
                    
                      
                       
                      
                     }
                   
                    
                   


                }      


        //   edit brand edit ................................edn ////



        //   Update Brand................................start////
       
       
           
            
                const formikedit =   useFormik({
               initialValues:editBranVal,

               onSubmit:() => {
                console.log(values)
               }               


              })


              // console.log(formikedit.values);


        //   edit brand edit ................................edn ////



  return (
  

    status ? <Loader /> :

    <Master>

      {/* brand model start */}

      {/* this confimation for delete      */}
      {confirmstatus ? <Confirm /> : ""}
     
 


       {/* add brand model open with useState hook  */}

      

          {/* add model open  */}

          { open ? 
      <div className="costom-modal">
                        <div className="modal_content">
                            <div className="modal-header">
                            <h5>Add Brand</h5>
                             <div className="close" onClick={()=>setOpen(false)}>
                             &times;
                             </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                
                                    <div className="form-group">
                                        <label htmlFor="name">Brand Name</label>
                                        <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={values.name} />
                                        <span className="text-danger">{errors.name}</span>
                                    </div>
                               
                            </div>

                            <div className="modal-footer">
                                   <button className="btn btn-primary" type="submit">Add Brand</button>
                            </div>
                            </form>
                        </div>
                      </div>


      :'' }   

          {/* add model end */}
          {/* edit model start */}


          { edit ? 
      <div className="costom-modal">
                        <div className="modal_content">
                            <div className="modal-header">
                            <h5>Add Brand</h5>
                             <div className="close" onClick={()=>setEdit(false)}>
                             &times;
                             </div>
                            </div>
                            <form onSubmit={formikedit.handleSubmit}>
                            <div className="modal-body">
                                
                                    <div className="form-group">
                                        <label htmlFor="name">Brand Name</label>
                                        <input type="text" className="form-control" id="name" name="name" onChange={formikedit.handleChange} value={formikedit.values.name} />
                                        <span className="text-danger">{formikedit.errors.name}</span>
                                    </div>
                               
                            </div>

                            <div className="modal-footer">
                                   <button className="btn btn-primary" type="submit">Update Brand</button>
                            </div>
                            </form>
                        </div>
                      </div>


      :'' }         
                      {/* brand model  end*/}


    
    <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-7 align-self-center">
                        
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><NavLink to="/" className="text-muted">Home</NavLink></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page">Users</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-5 align-self-center">
                        <div className="customize-input float-right">
                            <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                                <option selected="">Aug 19</option>
                                <option value="1">July 19</option>
                                <option value="2">Jun 19</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* table start  */}
          <div className="container">
          
            <div className="row">
                <div className="col-sm-12">
               
                <div className="card">

                    

              
                            <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <h4 className="card-title">BrandsTable</h4>
                            <button className="btn btn-primary" onClick={()=>setOpen(true)}>Add Brand</button>
                               </div>

                              
                               
                       
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">title</th>
                                               
                                                <th scope="col" colSpan={2}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    
                                      { brand.map((data , index)=>{
                                           return   <tr key={data._id} id={data._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{data.name}</td>
                                               
                                                <td><button className="btn btn-primary btn-sm" onClick={()=>editBrand(data._id)}>edit</button></td>
                                                <td><button className="btn btn-danger btn-sm" onClick={(e)=>brandDelete(data._id)}>Delete</button></td>
                                            </tr>
                                        })}
                                     
                                            
                                          
                                        </tbody>
                                    </table>
                                </div>
                            
                            </div>
                          
                        </div>
                </div>
            </div>
          </div>
          
    </Master>

    

  )
}

export default Brand