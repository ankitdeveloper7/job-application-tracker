const asynchandler = require("express-async-handler");
const Contact = require("../models/contactModel");


const saveContact = asynchandler(async(req, res)=>{
 const{name,jobtitle,companies,location,emails,phoneno,media} = req.body;
    if(!name || !emails || phoneno){
        return res.status(203).json({message:"please add required details"});
    }
    const issaved = await Contact.findOne({name,emails});
    if(issaved){
        return res.status(203).json({message:"Details are already added"});
    }
    const newcontact = new Contact({name,jobtitle, companies, location, emails, phoneno, media});
    await newcontact.save();
    res.status(200).json({message:"contact details added successfully"});
});

module.exports = {saveContact};