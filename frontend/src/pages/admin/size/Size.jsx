import { useState } from "react";
import Master from "../Master";
 import { useFormik } from "formik";
 import adminSchema from "../../../Schemas/admin";
 import callApi from "../../../api/index"
import { toast } from "react-toastify";

const Size = () => {

    const [open, setOpen] = useState(false);


      const initialValue = {
        name:""
      }
      const {errors,handleChange,handleSubmit , values} =useFormik({
            initialValues:initialValue,
            validationSchema:adminSchema.sizeValidation,
            onSubmit: async(values , {resetForm})=>{
             
               const header = {
                "Content-Type" : "application/json"
               }
              const response = await callApi("add-size","POST",header,values)
                   
                 if(response.status == 200 ){
                  toast.success(`${response.message}`)
                  resetForm()
                 }else{
                  toast.error(`${response.message}`)
                  resetForm()
                 }


            }

      })

     
  return (
    <Master>

    {/* model add size   start */}
     {
        open ? <div className="custom_modal">
                <div className="model_content">
                   <div className="close"  onClick={()=> setOpen(false) } >&times;</div>
                   <form onSubmit={handleSubmit}>
                  <div className="model_header"><h5>Add  Size</h5></div>
                     <div className="modal_body">
 
                       <div className="form-group">
                        <label >Name:</label>
                        <input type="text"  name="name" className="form-control" onChange={handleChange} value={values.name} />
                        <span className="text-danger">{errors.name}</span>
                       </div>
                          
                     </div>
                     <div className="modal_footer">
                      <button className="btn btn-primary" type="submit">Add Size</button>
                     </div>
                     </form>
                </div>
               </div>

               : ""
     }

    
    {/* model add size   send */}
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-7 align-self-center">
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 p-0">
                  <li className="breadcrumb-item">
                    <a className="text-muted" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-muted active"
                    aria-current="page"
                  >
                    Users
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-5 align-self-center">
            <div className="customize-input float-right">
              <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                <option>Aug 19</option>
                <option value="1">July 19</option>
                <option value="2">Jun 19</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* table content start */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title">BrandsTable</h4>
                  <button className="btn btn-primary" onClick={()=> setOpen(true) }>Add Size</button>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col" colSpan="2">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="64de3b1c11abf116b64e0581">
                        <th scope="row">1</th>
                        <td>bullet</td>
                        <td>
                          <button className="btn btn-primary btn-sm">edit</button>
                        </td>
                        <td>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* table content end */}
    </Master>
  );
};

export default Size;
