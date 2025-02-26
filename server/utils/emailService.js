const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'catherine.sanford99@ethereal.email',
      pass: 'pM9FWwwt2naAS7P25H'
  }
});

const sendMail = async(to,subject,text)=>{
    try{
      const mailOptions = {
        from:"catherine.sanford99@ethereal.email",
        to,
        subject,
        text
      };
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent ${info.response}`);
    }catch(error){
        console.error(`Some error has occured ${error.message}`)
        throw error;
    }
}

module.exports = sendMail;