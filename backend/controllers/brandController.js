const BrandModel = require("../models/Brand.js");

class BrandController {
  
    static index  = async (req,res)=>{
        try {

           const brand = await BrandModel.find();
                
           res.json({
             status:200,
             "message":"all brand get",
             data:brand
           })
           
            
        } catch (error) {
            res.json({
                status:403,
                message:"Brand Name Already Exist"
             })
        }
    }


static addBrand = async (req,res)=>{
    try {
              
        const {name} = req.body;

         const brandCheck = await BrandModel.findOne({name:name});

         if(brandCheck){
            res.json({
                status:403,
                message:"Brand Name Already Exist"
             })

         }else{
            const brandDoc = BrandModel({

                name:name
             })
    
             await brandDoc.save();
             res.json({
                status:200,
                message:"Brand Added"
             })
         }

       
    } catch (error) {
        res.json({
            status:403,
            message:"Something Wrong"
         })
    }
}

        static edit = async (req,res)=>{
            try {
                   
                const {id} = req.body
                   
                const user = await BrandModel.findOne({_id:id});
                 
                res.json({
                    status:200,
                    message:"single user get",
                    data:user
                })

             
            } catch (error) {
                
                console.log(error);
            }
        }



   static delete = async (req,res)=>{
    try {
         const {id} = req.body;
            
         await BrandModel.findByIdAndDelete(id);
         res.json({
            status:200,
            message:"Brand Deleted"
         })

    } catch (error) {
        
        res.json({
            status:403,
            message:"something Wrong"
        })
    }
   }

}


module.exports = BrandController;