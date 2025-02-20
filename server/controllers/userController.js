const asynchandler = require("express-async-handler");
const User = require("../models/userModel");
const OTP = require("../models/userModel");
const sendMail = require("../utils/emailService");
const bcrypt = require("bcrypt");



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
    res.statusCode(200).json({ message: "you have registered successfully" });
});

const loginuser = asynchandler(async (req, res) => {
   const { email, password } = req.body;
   const user = User.findOne({ email });
   if (!user) {
      return res.status(403).json({ message: "account not found pleaase register" });
   }
   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) {
      return res.status(403).json({ message: "Invalid password" });
   }
     res.status(200).json({ message: "login succesfully" });
});


const sendOtp = asynchandler(async (req, res) => {
   const { email } = req.body;
   const isValidemail = User.findOne({email});
   if (!email || isValidemail) {
      return res.status(300).json({ message: "email is required" });
   };

   const otp = Math.floor(Math.random() * 1000000);
   await OTP.create({ email, otp, expiresAt: Date.now() + 3 * 60 * 1000 });
   sendMail(email, "Password Reset OTP", `Your OTP is ${otp}`);
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
module.exports = { registeruser, loginuser, sendOtp,verifyOtp, updatePassword };