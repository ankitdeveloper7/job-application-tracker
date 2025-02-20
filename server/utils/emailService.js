const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"",
        pass:""
    }
});

const sendMail = async(to,subject,text)=>{
    try{
      const mailOptions = {
        from:"kumar27ankitsingh@gmail.com",
        to,
        subject,
        text
      };
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent ${info.response}`);
    }catch(error){
        console.error(`Some error has occured ${error}`)
    }
}

module.exports = sendMail;