import * as Yup from "yup"

class adminSchema{


    static brandValidation = () =>{

         return Yup.object({
            name:Yup.string().required("Please Enter The Brand")
         })

    }

    static categoryValidation = () =>{
        return Yup.object({
          
            name:Yup.string().required("Please Enter The Category")
        })
    }


    static sizeValidation = () =>{
        return Yup.object({
          
            name:Yup.string().required("Please Enter The Size")
        })
    }


}

export default adminSchema;