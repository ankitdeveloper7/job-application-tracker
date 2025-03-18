const cloudinary = require('cloudinary').v2;
const fs = require("fs");
require('dotenv').config();
const User = require("../models/userModel");
const Document = require("../models/documentModel");

cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localPathFile) => {
    try {
        if (!localPathFile) return null;  
        const uploadResult = await cloudinary.uploader.upload(localPathFile, { resource_type: "auto" });
        console.log("uploaded done")
        console.log(uploadResult);
        return uploadResult; 
    } catch (error) {
        console.error("Upload Error:", error);
        fs.unlinkSync(localPathFile); 
        return null;
    }
};


module.exports = uploadOnCloudinary;
