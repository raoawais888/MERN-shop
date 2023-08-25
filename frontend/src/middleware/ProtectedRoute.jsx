import { Outlet, useNavigate } from 'react-router-dom';
import callApi from '../api';
import { useEffect } from 'react';




const ProtectedRoute = () => {
   
   
    const navigate = useNavigate();
  


   const tokenCheck = async ()=>{
    const token_get = localStorage.getItem("token");
         const token = {
            token:token_get         
        }


        const header = {
            "Content-Type":"application/json"
        }
        
        const response = await callApi("/verify-token","POST",header,token);
                    
                  if(response.auth){
                   
                  }else{
                    navigate("/login")
                  }
            

  

   }

   useEffect(()=>{
    tokenCheck();
   },[])

    return (
           
       <Outlet /> 

    )


   
};

export default ProtectedRoute;
