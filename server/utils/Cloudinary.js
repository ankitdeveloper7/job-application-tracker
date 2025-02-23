import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET 
    });
    
  //upload file here
  const uploadOnCloudinary = async (localPathFile) => {
    try {
        if(!localpath) return null;
        const uploadresult = await cloudinary.uploader.upload(localPathFile, {resource_type:"auto"});
        console.log(uploadresult);
    } catch (error) {
        fs.unlinkSync(localPathFile);
    }
    
  }
}
);
module.exports = {uploadOnCloudinary};



