const userModel = require("../models/User.js")
const bcrypt = require("bcrypt");
class userService {
 

    static users = async ()=>{
             
        return  await userModel.find();
    }

    static userStore = async(name , email , password)=>{

               
        try {
        
            const passwordHash = await bcrypt.hash(password,10);
             
         

        const userDoc = userModel({

            name:name,
            email:email,
            password:passwordHash,
            active:true

        })
       
        await userDoc.save();
        
        } catch (error) {
            console.log(error);
        }
        
    }



    static verify_user = async (email,password)=>{
        try {
            
              const email_check = await userModel.findOne({email:email});
                if(email_check){
                     const hashing_password = email_check.password;   

                    if(await bcrypt.compare(password,hashing_password)){

                       
                        return email_check ;
                    }else{
                        return false;
                    }

                }else{

                    return false ;
                }


        } catch (error) {
            
            console.log(error);
        }
    }

    static reset_password = async (email)=>{
        try {
          
              const check_mail = await userModel.findOne({email:email});

                     if(check_mail){

                        return check_mail;
                       
                     }else{
                        return false;
                     }


        } catch (error) {
            console.log(error);
        }
    }



       static user_find = async (id) =>{
        try {
                //    console.log(id);
              const user = await userModel.findById(id);
            //   console.log(user);

              if(user){
                   return true;
              }else{
                return false;
              }

        } catch (error) {
            console.log(error);
        }
       }


       static update_password = async (id,password)=>{
        try {
             const hashPassword = await bcrypt.hash(password,10);  
            await userModel.findByIdAndUpdate({_id:id},{password:hashPassword});
            return true;
            
        } catch (error) {
            console.log(error);
        }
       }

}


module.exports = userService;


