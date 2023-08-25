
const Size = require("../models/Size.js");

class sizeController {
          
    static store = async (req,res)=>{
        try {
            const {name} = req.body;
             
            const checkSize = await Size.findOne({name:name});
            console.log(checkSize);
             
            if(checkSize){

             res.json({
                status:403,
                message:"Size Already Exist"
             })

            }else{

                      const sizeDoc = Size({
                        name:name
                      })


                      await sizeDoc.save();

                      res.json({
                        status:200,
                        message:"Size is Added"
                     })

            }

            
        } catch (error) {
            console.log(error);
        }
    }
 
     
}

module.exports = sizeController;