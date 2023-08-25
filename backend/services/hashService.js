
const crypto = require("crypto");
const Hash_SECRET = process.env.HASH_SECRET;
class hashService {
       
    static hashGenrate = async (data) =>{
        return await crypto.createHmac('sha256', Hash_SECRET).update(data).digest('hex');
    }

    static matchHash = async(hash,data)=>{
        try {
             const hashing =  await hashService.hashGenrate(data);

              return hashing == hash
                
            
        } catch (error) {
            
            console.log(error);
        }
    }

}

module.exports = hashService;