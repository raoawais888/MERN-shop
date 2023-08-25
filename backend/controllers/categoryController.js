const Category = require("../models/Category.js");


class categoryController {
           
         static index = async (req , res) =>{
            try {
              
              
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 5;
                const skip = (page - 1) * limit;
                const searchQuery = req.query.search || '';

             
                let catquery = Category.find();

        if (searchQuery) {
            catquery = catquery.find({ name: { $regex: searchQuery, $options: 'i' } });
        }

        let totalItemQuery = Category.find();

        if (searchQuery) {
            totalItemQuery = totalItemQuery.find({ name: { $regex: searchQuery, $options: 'i' } });
        }

        const totalItem = await totalItemQuery.countDocuments();
        const data = await catquery.skip(skip).limit(limit);
               


                 res.json({
                    status:200,
                    message:"all categories",
                    data,
                    currentPage:page,
                    totalPages: Math.ceil(totalItem / limit)
                 })

            } catch (error) {
                
                // res.json({
                //     status:403,
                //     message:"Something wrong",
                    
                //  })
                console.log(error);
            }
         }


    static store = async (req,res)=>{

         try {
            
            const {name} = req.body;

            // category check 
                
            const category_check = await Category.findOne({name:name});
          

             if(category_check){

                res.json({
                    status:403,
                    message:"Category Already Exist",
                })
             }else{
                     
                const categoryDoc = Category({
                    name:name
                })

                await categoryDoc.save();

                res.json({
                    status:200,
                    message:"Category Succesfully Added",
                })

             }

           

         } catch (error) {
            
            console.log(error)
         }
    }



    static delete = async (req,res) =>{
        try {
             
            const {id} = req.body;
            await Category.findByIdAndDelete(id);
            res.json({
                status:200,
                message:"Category Deleted"

            })

        } catch (error) {
            res.json({
                status:403,
                message:"Something wrong"

            })
        }
    }


}

module.exports = categoryController;