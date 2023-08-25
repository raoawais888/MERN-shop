
const otpService = require("../services/optService.js")
const hashService = require("../services/hashService.js")
const userService = require("../services/userService.js")
const tokenService = require("../services/tokenService.js");
class userController  {
    
        static index = async (req,res)=>{
            try {
              const users = await userService.users();
                res.json({
                    message:"User get",
                    status:200,
                    data:users
                })
                
            } catch (error) {
                console.log(error)
            }
        }


    static register = async (req,res) =>{
        try {

            const {name,email,password} = req.body;
            // console.log(req.body);
            const otp = await otpService.otpGenrate();
             let ttl = 1000*60*2
             const expire = Date.now() + ttl ;
            const data = `${email}.${otp}.${expire}`; 
            const hash = await hashService.hashGenrate(data);
               
               await otpService.otpSend(email,otp);

             res.json({
                hash: `${hash}.${expire}`,
                otp:otp,
                email:email,
                password:password,
                name:name,
                status:200
             })

            
               


        
            
        } catch (error) {
            console.log(error)
        }
    }


    static verifyOTP = async (req,res)=>{
        try {
            
                //  console.log(req.body);
             const {name,otp ,email,hash,password} = req.body;
            const [hashing,expire] = hash.split(".");
                
            if(Date.now() > expire){
                res.json({
                    message:"otp has been expred",
                    status: 403
                })
            }

            const data = `${email}.${otp}.${expire}`;

             const hashChecked =  await hashService.matchHash(hashing,data);
              if(hashChecked){
                 
                await userService.userStore(name,email,password);

                res.json({
                    message:"Registraion successfully ",
                    status:200
                })

              }else{
                res.json({
                    message:"Invalid Otp",
                    status:403
                })
              }


                     
            
        } catch (error) {
            
            console.log(error);
        }
    }


    static auth =async (req,res) =>{
        try {
        
        const {email , password} = req.body;
          
           const check_user = await userService.verify_user(email,password) ;
           if(check_user){
                  
                const token = await tokenService.genrateToken(check_user.id);
                 res.json({
                    message:"Login Successfully",
                    token,
                    user:check_user,
                    status:200
                 })
                
           }else{
              
            res.json({
                message:"Invalid Information",
                status:403
            })

           }
        
            

        } catch (error) {
            
            console.log(error);
        }
    }


    static reset = async(req,res)=>{
        try {
            const {email} = req.body;
            const email_check = await userService.reset_password(email);
            
            if(email_check){

                otpService.reset_email(email_check); 
                res.json({
                    message:"Password Reset sent on Your email",
                    status:200
                })

            }else{

                res.json({
                   message:"Invalid Email",
                   status:403

                })

            }
            

        } catch (error) {
            console.log(error);
        }
    }

    static password_reset = async (req,res)=>{
        try {
           const {_id , expire , password } = req.body;
                    //  console.log(req.body);
           if(Date.now() > expire){
               
            res.json({
                message:"Link has been expire",
                status:403
            })
           }

           const check_user = await userService.user_find(_id);
           
           if(check_user){
                  
            const update = await userService.update_password(_id,password);
            if(update){
                res.json({
                    message:"Password Updated",
                    status:200
                })
            }else{
                res.json({
                    message:"Something wrong",
                    status:403
                })
            }

           }else{
            res.json({
                message:"invalid User",
                status:403
            })
           }




        } catch (error) {
            
            console.log(error);
        }
    }


     static verify_token = async (req,res)=>{  
    const {token} = req.body;

       const id= await tokenService.verifyToken(token);
                 if(id){
                     
                    const user = await  userService.user_find(id)
                      if(user){
                        res.json({
                            message:"valid User",
                            status:200,
                            auth:true
                        })
                      }

                 }else{
                    res.json({
                        message:"invalid  User",
                        status:403,
                        auth:false
                    })
                 }



                

     }

}

module.exports = userController;