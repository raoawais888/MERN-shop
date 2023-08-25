import Master from "./Master"
import { useEffect, useState } from "react"
import callApi from "../../api"
import { useSelector , useDispatch } from "react-redux"
import { loaderChange } from "../../store/slice/loaderSlice"
import Loader from "../../components/admin/Loader"
import { NavLink } from "react-router-dom"

const Users = () => {
      
     const {status} = useSelector((state)=>state.loader)
         const dispatch = useDispatch()
    const [users,setUser] = useState([])
 
     
    const fetchUser = async () =>{
        try {
               dispatch(loaderChange(true))    

            const header ={
                'Content-Type':"application/json"
            }

            const token = localStorage.getItem("token");
                      
            const token_get = {
                token:token
            }

            const response = await callApi("/users","POST",header,token_get);
                if(response.status == 200){
                     setUser(response.data)

                     dispatch(loaderChange(false))   
                }
            
        } catch (error) {
            
        }
    }

            useEffect (()=>{
                 document.title = 'My Page Title';
                fetchUser();

            },[])




    return (

        // confirm box component render ......_expanded_
              
     

        // confirm box component render ......_expanded_

        status ? <Loader /> :
    <Master>
  
    <>
    


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
                                <h4 className="card-title">Users Table</h4>
                               
                       
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {users.map((element , index)=>{

                                              return <tr key={element._id }>
                                                <th scope="row">{index+1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td><button className="btn btn-primary btn-sm">edit</button></td>
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
            {/* table end  */}

    </>

        
   

    </Master>
      
  )
}

export default Users