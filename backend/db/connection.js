const mongoose = require("mongoose")

const connection = async (DB_URL) =>{
    try {

        const OPTION = {
            dbName:process.env.DB_NAME
        }

        await mongoose.connect(DB_URL,OPTION)
        console.log("db connected")
        
    } catch (error) {
        
        console.log(error);
    }
}
module.exports = connection;