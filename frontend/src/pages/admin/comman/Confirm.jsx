import "./comman.css";
import { useDispatch , useSelector} from "react-redux";
import { changeConfirm ,informationGet } from "../../../store/slice/confirmSlice";
import callApi from "../../../api";
import { toast } from "react-toastify";



const Confirm = () => {
 
    const dispatch = useDispatch();
    const {information } = useSelector((state)=>state.confirm);

     const {endpoint , id } = information;

      console.log(id);

      const deleteItem = async () =>{
        
        
        const header = {
            "Content-Type":"application/json"
        }
        const data = {
            id:id
        }
        
      const response = await  callApi(endpoint,"POST",header,data);
      
      if(response.status == 200){
        document.getElementById(`${id}`).remove()
        dispatch(changeConfirm(false))
        dispatch(informationGet({endpoint:"",id:""}))
        toast.success(`${response.message}`)
        
      }else{
        toast.error(`${response.message}`)
      }
       

      }

  return (
     <>
         <div className="confirm_wrapper">
           <div className="content">
               <div className="close" onClick={(e)=>{dispatch(changeConfirm(false))}}>&times;</div>
                <h3>Are You Sure Delete This ?</h3>
                    
                    <div className="buttons">
                        <button className="btn btn-primary mr-2"   onClick={(e)=> {deleteItem(e)}}>ok</button>
                        <button className="btn btn-danger" onClick={(e)=>{dispatch(changeConfirm(false))}}>cencel</button>
                    </div>

           </div>
         </div>

     </>
  )
}

export default Confirm