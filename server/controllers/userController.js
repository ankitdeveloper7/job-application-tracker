const asynchandler = require("express-async-handler");
const User = require("../models/userModel");
const OTP = require("../models/otpModel");
const sendMail = require("../utils/emailService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const registeruser = asynchandler(async (req, res) => {

   const { name, email, password } = req.body;
   const user = await User.findOne({ email });

   if (user) {
     return res.status(400).json({ message: "you have already registered please login" });
   }
   if (password.length < 8) {
      return res.status(403).json({ message: "password is short add atleast 8 character" });
   }
   const hashpassword = await bcrypt.hash(password, 10);
   const newuser = new User({ name, email, password: hashpassword });
   await newuser.save();
   const token = jwt.sign({email, user:email}, process.env.SECRET, {expiresIn:'1h'});
    res.status(200).json({ message: "you have registered successfully", token });
});

const loginuser = asynchandler(async (req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if (!user) {
      return res.status(403).json({ message: "account not found pleaase register" });
   }
   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) {
      return res.status(403).json({ message: "Invalid password" });
   }
   const token = jwt.sign({email, user:email}, process.env.SECRET, {expiresIn:'1h'});
     res.status(200).json({ message: "login succesfully",token });
});

const getUserDetails = asynchandler(async(req, res)=>{
   const user = req.user.email;
   if(!user){
       return res.status(403).json({message:"Some Invalid error has occured !"});
   }
   console.log("this is the value of user", user);
   const userData = await User.findOne({email:user});
   console.log("this is the value of userdata", userData);
   console.log("program ran till here");
   return res.status(200).json(userData);
});


const sendOtp = asynchandler(async (req, res) => {
   const { email } = req.body;
   const isValidemail = await User.findOne({email});
   console.log(isValidemail);
   console.log(email);
   if (!email || !isValidemail) {
      console.log("how this will be printed if both have some value")
      return res.status(300).json({ message: "email is required" });
   };

   const otp = Math.floor(Math.random() * 1000000);
   await OTP.create({ email, otp, expiresAt: Date.now() + 3 * 60 * 1000 });
   const info  = await sendMail(email, "Password Reset OTP", `Your OTP is ${otp}`);
   console.log("this is info from sendotp section", info);
     res.status(200).json({ message: "OTP sent successfully" });
});

const verifyOtp = asynchandler(async( req, res)=>{
   const{email, otp} = req.body;
   if(!email || !otp){
       return res.status(300).json({message:"email is required"});
   }
   const recordeotp = await OTP.findOne({email, otp});
   if(!recordeotp){
       return res.status(300).json({message:"Invalid error has occured"});      
   }
   await OTP.deleteOne({email, otp});
    res.status(200).json({message:"OTP verified successfully"});   

});

const updatePassword = asynchandler( async(req, res)=>{
   const{email,newPassword,confirmPassword} = req.body;
console.log("till this code ran successfuly");
   if(!email){
      return res.status(400).json({message:"Email is required to update password"});
   }
   const isValid = await User.findOne({email});
   if(!isValid){
      return res.status(400).json({message:"Email is Invalid!"})
   }
   if(newPassword!=confirmPassword){
      return res.status(400).json({message:"enter same password in both the box"});
   }
   if (newPassword.length <8) {
      return res.status(400).json({ message: "password is short add atleast 8 character" });
   }
   const hashpassword = await bcrypt.hash(newPassword, 10);
   await User.updateOne({email},{$set:{password:hashpassword}})
    res.status(200).json({message:"password has updated successfully"});
});

const uploadProfile =   async function (req, res, next) {
    try {
      
       if(!req.file){
        return res.status(500).json({message:"profile photo not uploaded"});
       }

       const localPathFile = req.file.path;
      const uploadfile  =  await uploadOnCloudinary(localPathFile);

      if (!uploadfile || !uploadfile.url) {
         return res.status(500).json({ message: "Error uploading file to cloud" });
     }

       fs.unlink(localPathFile ,(err)=>{
        if(err){
            console.error("error deleting profile photo", err);
        }else{
            console.log("profile photo has been deleted from the storage:",localPathFile);
        }
       });

       res.status(200).json({message:"profile photo uploaded successfully!", uploadfile});
    } catch (error) {
        console.log("some error has occured", error);
        res.status(500).json({error:"profile photo upload has failed"})
    }
  }

module.exports = { registeruser, loginuser, sendOtp,verifyOtp, updatePassword, uploadProfile, getUserDetails };