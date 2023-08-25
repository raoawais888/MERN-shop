
const jwt = require("jsonwebtoken");
  const SECRET = process.env.LOGIN_SECRET;

class tokenService {

   static genrateToken = async (paylod) =>{

    try {

           const accessToken = await jwt.sign({_id:paylod},SECRET,{
             expiresIn:'1d'
           })
           return accessToken;
        


    } catch (error) {
        
        console.log(error);
    }
   }



     static verifyToken = async(token)=>{
      try {
        
            const {_id} = jwt.verify(token,SECRET);

            return _id
              
                  
            

      } catch (error) {
              return false;
      }
     }

}

module.exports = tokenService;