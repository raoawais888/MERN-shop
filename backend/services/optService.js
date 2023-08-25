
const crypto = require("crypto");
const  transporter = require("../config/otp_mail.js")
class otpService {
 
    static otpGenrate = async () =>{
        try {
            
            return await crypto.randomInt(1000,9999);

        } catch (error) {
            
            console.log(error);
        }
    } 


    static otpSend  = async (email,otp) =>{
        try {
            
           
            const info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: email, // list of receivers
                subject: "Otp", // Subject line
                text: `Your Otp Code is ${otp}` , // plain text body // html body
              });
            
              console.log("Message sent: %s", info.messageId);

        } catch (error) {
            console.log(error)
        }
    }

     static reset_email = async (user)=>{
             
           const id = user._id;
           const email = user.email;
             const ttl = Date.now() + 1000 * 60 * 2 
              
             const link = `http://localhost:5173/password_reset/${id}/${ttl}`;

             const info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: email, // list of receivers
                subject: "Otp", // Subject line
                text: `Reset Password Link ${link}` , // plain text body // html body
              });
            
              console.log("Message sent: %s", info.messageId);


     }

}

module.exports = otpService;