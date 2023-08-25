import { useEffect, useState } from "react";
import Master from "../Master";
import { NavLink } from "react-router-dom";
import "./category.css";
import { useFormik } from "formik";
import adminSchema from "../../../Schemas/admin";
import callApi from "../../../api";
import { toast } from "react-toastify";
import { loaderChange } from "../../../store/slice/loaderSlice";
import {useSelector , useDispatch} from "react-redux"
import Loader from "../../../components/admin/Loader"
import { changeConfirm , informationGet } from "../../../store/slice/confirmSlice";
import Confirm from "../comman/Confirm";
const Category = () => {  
  const [open , setOpen] = useState(false)
  const [category , setCategory] = useState([])
    const {status} = useSelector((state)=> state.loader)
    const {confirmstatus} = useSelector((state)=>state.confirm);
    const dispatch= useDispatch();

    // pagination code /////........................................

         const [totalPages, setTotalPages] = useState(1);
         const [currentPage, setCurrentPage] = useState(1);
         const [searchQuery, setSearchQuery] = useState('');
         const limit = 5;
         
          

  //  debounce code working on tommorow 
//   import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const limit = 10;
//   let debounceTimeout;

//   const fetchData = () => {
//     axios.get(`/api/items?search=${searchQuery}&page=${currentPage}&limit=${limit}`)
//       .then(response => {
//         setItems(response.data.items);
//         setTotalPages(response.data.totalPages);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   const handleSearchChange = (value) => {
//     setSearchQuery(value);

//     if (debounceTimeout) {
//       clearTimeout(debounceTimeout);
//     }

//     debounceTimeout = setTimeout(() => {
//       fetchData();
//     }, 300); // Adjust the debounce delay as needed
//   };

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={e => handleSearchChange(e.target.value)}
//       />
//       {/* Rest of your code */}
//     </div>
//   );
// }

// export default App;

  //  debounce code working on tommorow 


    // pagination code /////........................................

  const fetchCategory  = async() =>{
    dispatch(loaderChange(true))
    const header = {
      "Content-Type":"application/json"
    }
     

        const response = await callApi(`/category?page=${currentPage}&limit=${limit}&search=${searchQuery}`,"GET",header);
        dispatch(loaderChange(false))
        setTotalPages( response.totalPages)
        setCurrentPage(response.currentPage)
        setCategory(response.data);  
   
       
         

    }

           useEffect(()=>{
              fetchCategory();
           },[currentPage , searchQuery])


            



           const initialValue = {
            name:"",
           }

      const {values,handleChange,handleSubmit,errors} =   useFormik({
           initialValues:initialValue,
           validationSchema:adminSchema.brandValidation,
           onSubmit: async(values , {resetForm})=>{
               const header = {
                "Content-Type":"application/json"
               }
            const response = await callApi("/add-category","POST",header,values);
               
                       if(response.status == 200){
                            
                        toast.success(`${response.message}`)
                          resetForm();

                       }else{
                        toast.error(`${response.message}`)
                       }

           }   
         })


    // brand delete  start 

     const deleteBrand = (id) =>{
         dispatch(changeConfirm(true));
         dispatch(informationGet({endpoint:"/delete-category",id:id}))
     }
      
    // brand delete  start end


      //  pagination code 

     



       
console.log(totalPages)
  return (

    status ? <Loader /> : 
    <Master>

      {confirmstatus ? <Confirm /> : "" }

          {/* add category model start */}

            { open ?   
              <div className="custom_modal">
                <div className="model_content">
                   <div className="close"  onClick={()=> setOpen(false) }>&times;</div>
                   <form  onSubmit={handleSubmit}>
                  <div className="model_header"><h5>Add Category</h5></div>
                     <div className="modal_body">
 
                       <div className="form-group">
                        <label >Name:</label>
                        <input type="text"  name="name" className="form-control" onChange={handleChange} value={values.name} />
                        <span className="text-danger">{errors.name}</span>
                       </div>
                          
                     </div>
                     <div className="modal_footer">
                      <button className="btn btn-primary" type="submit">Add Category</button>
                     </div>
                     </form>
                </div>
               </div>

            :''
            }

          {/* add category model end */}


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
          
        </div>
      </div>

      {/* table start */}

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  
                  <button className="btn btn-primary" onClick={()=> setOpen(true) }>Add Category</button>

                    <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />    
                    

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
                    {  category.map((data , index ) => {
                     

                  
                      return <tr key={data._id} id={data._id}>
                        <th scope="row">{(currentPage - 1) * limit + index + 1}</th>
                        <td>{data.name}</td>
                        <td>
                          <button className="btn btn-primary btn-sm">edit</button>
                        </td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={()=>deleteBrand(data._id)}>Delete</button>
                        </td>
                      </tr>

                    }) }

                    </tbody>
  
                  </table>

                  <nav aria-label="Page navigation example" className="w-100">
  <ul className="pagination justify-content-end align-items-center">
    <li className="page-item"><button class="page-link" onClick={ () => setCurrentPage(currentPage - 1)}  disabled={currentPage === 1}>Previous</button></li>
           
           
            
    {  Array.from({ length: totalPages  }, (val, i) => (
     
      <li key={i} className={ `page-item ${( i+1  === currentPage ? 'active' : '')}`}  onClick={()=> setCurrentPage(i+1) }>
        <a className="page-link {}" href="#">{i + 1}</a>
      </li>
    ))}      
    <li className="page-item" ><button class="page-link" onClick={()=>setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}  >Next</button></li>

  </ul>
</nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    </Master>
  );
};

export default Category;
