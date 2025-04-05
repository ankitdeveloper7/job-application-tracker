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
       console.log("this is contact information", data);
       res.status(200).json(data);
});

const updateContact = asynchandler(async(req, res)=>{
    const user = req.user.email;
    const {contactid} = req.params;
    const{name,jobtitle,companies,location,email,phonenumber,media} = req.body;
    const admin = await User.findOne({email:user});
    if(!admin){
        return res.status(203).json({message:"some invalid error has occured try to login in again"})
    }
    const response = await Contact.updateOne(
        {_id:contactid},
        {$set:{name:name, jobtitle:jobtitle, companies:companies, location:location, email:email, phonenumber:phonenumber, media:media}}
    );
    console.log(response);
    res.status(200).json({message:"contact details updated succesfully"})
});

const deleteContact = asynchandler(async(req,res)=>{
    const user = req.user.email;
    const {contactid} = req.params;
    const admin = await User.findOne({email:user});
    if(!admin){
        return res.status(203).json({message:"some invalid error has occured try to login in again"})
    };
    await Contact.deleteOne({_id:contactid});
    res.status(200).json({message:"contact details deleted successfully"})
})

module.exports = {saveContact, getContact, updateContact, deleteContact};
