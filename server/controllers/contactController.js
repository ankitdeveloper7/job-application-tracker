const asynchandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const User = require("../models/userModel");


const saveContact = asynchandler(async(req, res)=>{
 const{name,jobtitle,companies,location,email,phonenumber,media} = req.body;
    if(!name || !email || !phonenumber){
        return res.status(203).json({message:"please add required details"});
    }
    const issaved = await Contact.findOne({name,email});
    if(issaved){
        return res.status(203).json({message:"Details are already added"});
    }
    const newcontact = new Contact({name,jobtitle, companies, location, email, phonenumber, media});
    await newcontact.save();
    const admin = await User.findOne({email:req.user.email});
    if(!admin){
        return res.status(203).json({message:"try loging in again, some invalid error has occured"});
    }
    admin.contact.push(newcontact);
    await admin.save();
    res.status(200).json({message:"contact details added successfully"});
});

const getContact = asynchandler(async(req, res)=>{
       const user = req.user.email;
       const admin = await User.findOne({email:user});
       if(!admin){
        return res.status(302).json({message:"login again some invalid error has occured"});
       }
       const contactdata = await User.findOne({email:user}).populate('contact');
       const data = contactdata.contact;
       res.status(200).json(data);
})

module.exports = {saveContact, getContact};
