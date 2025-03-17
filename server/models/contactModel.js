const mongoose  = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        required:false
    },
    companies:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    socialmedia:{
        type:String,
        required:false
    }
})

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;