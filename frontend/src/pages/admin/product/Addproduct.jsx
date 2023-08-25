import { useEffect, useState } from "react";
import Master from "../Master"
import callApi from "../../../api/index"





import { NavLink } from "react-router-dom";
const Addproduct = () => {

  const [brand , setBrand] = useState([]);

           const header = {
              "Content-Type":"application/json"
           }

      const FetchCategory = async () =>{

              //  const response = await callApi("/category","GET",header);
              //  console.log(response);

        

      }
      const FetchBrand = async () =>{
        const response = await callApi("/brand","GET",header);
              setBrand(response.data)     

      }


      

   useEffect(()=>{
       document.title="Add Product"
        FetchCategory()
        FetchBrand()
   },[])


   console.log(brand);


  return (
  <Master>
  <div className="page-breadcrumb mt-4">
                <div className="row">
                    <div className="col-7 align-self-center">
                        
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><NavLink to="/" className="text-muted">Home</NavLink></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page">Add Product</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                   
                </div>
            </div>

      

<>
    


    <div className="page-breadcrumb mt-4">
                <div className="row">
                    <div className="col-7 align-self-center">
                        
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><NavLink to="/" className="text-muted">Home</NavLink></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page">Add Product</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                   
                </div>
            </div>

           
          <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Add Product</h4>
                               
                                  <form action="">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="name">Product Name</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="name">Brand </label>
                                            
                                            <select name="brand" id="brand" className="form-control">
                                            
                                                <option disabled selected>Select Brand</option>
                                                  {brand.map((option) => (
                                                      
                                                     <option key={option._id} value={option._id}>{option.name}</option>

                                                ))}
                                               
                                            </select>

                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="name">Category</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                      </div>


                                    </div>


                                    <div className="box w-100">
                                     <h5>Attriutes</h5>

                                     <div className="row">


                                      <div className="col-md-2">
                                      <div className="form-group">
                                      <label htmlFor="name">price:</label>
                                        <input type="text" className="form-control" id="name" />
                                      </div>
                                      </div>

                                      <div className="col-md-2">
                                      <div className="form-group">
                                      <label htmlFor="name">Qty:</label>
                                        <input type="text" className="form-control" id="name" />
                                      </div>
                                      </div>

                                      <div className="col-md-2">
                                      <div className="form-group">
                                      <label htmlFor="name">Color:</label>
                                        <input type="color" className="form-control" id="name" />
                                      </div>
                                      </div>


                                      <div className="col-md-3">
                                      <div className="form-group">
                                      <label htmlFor="name">image</label>
                                        <input type="file" className="form-control" id="name" />
                                      </div>
                                      </div>


                                      <div className="col-md-3">
                                        <img src="" alt="" />
                                      </div>

                                     </div>
                                    

                                    </div>



                                  </form>
                                  
                            
                            </div>
                          
                        </div>
                </div>
            </div>
          </div>
        

    </>

    
    </Master>
  )
}

export default Addproduct