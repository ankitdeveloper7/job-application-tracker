const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt =  require("bcrypt");
const cors = require('cors');
require('dotenv').config();
const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl = process.env.MONGODB_URI;

mongoose.connect(mongoUrl).then(() =>{
    console.log("connected successfully");
}).catch((err)=>{
console.log("some error has occured", err);
})

const SECRET = "hellosir";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

const User = mongoose.model("User", userSchema);

const userauthenicateJwt = (req, res, next) =>{
    const autheader = req.headers.authorization;
    try{
        if(autheader){
            const token = autheader.split(" ")[1];
            jwt.verify(token, SECRET, (res, err) =>{
                if(err){
                    return res.status(403).json({message:"Invalid Credentials!"})
                }
                req.user = user;
                next();
            });
        }
        else{
            return res.status(403).json({message:"some error has occured"});
        }
    }catch(err){
        console.log(err)
    }
}

app.post("/signup",async (req, res) =>{

    try{
        const{username, password} = req.body;
        const user =await User.findOne({username});
        if(user){
            res.status(403).json({message:"user already exits!"})
        }
        const token = jwt.sign({username, role:user}, SECRET, {expiresIn: '1h'})
        const hashpassword = await bcrypt.hash(password, 10);
        const newuser = new User({username, password:hashpassword});
        await newuser.save();
        res.status(200).json({message:"user successfully sign up in the device", token})
    } catch(err){
        console.log(err);
        res.status(403).json({error:"Error in singinup the account"})
    }
    
});

app.post("/signin", async (req, res) =>{
    try{
         const{username, password} = req.body;
         const user = await User.findOne({username});
         if(!user){
            res.status(403).json({message:"Invalid Credentials!"})
         }
         
         const isMatch = await bcrypt.compare(password, user.password);
         if(!isMatch){
            res.status(403).json({message:"invalid password"})
         }
         const token = jwt.sign({username, role:user}, SECRET, {expiresIn:'1h'});
         res.status(200).json({message:"successfully logged in",token})
    }catch(err){
        console.log(err);
        res.status(403).json({error:"some error has occured"})
    }
})

app.listen(PORT, ()=>{
   console.log(`you localhost is running on port number ${PORT}`)
});
