const asynchandler = require("express-async-handler");
const fs = require("fs");
const uploadOnCloudinary = require("../utils/Cloudinary");
const Document = require("../models/documentModel");
const User = require("../models/userModel");
const Filedata = require("../models/fileModel");


const uploadDocument = async function (req, res, next) {
    try {

        if (!req.file) {
            return res.status(500).json({ message: "file not uploaded" });
        }

        const localPathFile = req.file.path;

        const uploadfile = await uploadOnCloudinary(localPathFile);
        const docurl = uploadfile.secure_url;
        console.log("this is url of uploaded file", docurl);
        const uploadoc = new Filedata({ filename: docurl });
        await uploadoc.save();
        const admin = await User.findOne({ email: req.user.email });
        if (!admin) {
            return res.status(403).json({ message: "Invalid user, try logging in again" })
        }
        admin.file.push(uploadoc);
        await admin.save();
        if (!uploadfile || !uploadfile.url) {
            return res.status(500).json({ message: "Error uploading file to cloud" });
        }

        fs.unlink(localPathFile, (err) => {
            if (err) {
                console.error("error deleting temp file:", err);
            } else {
                console.log("temporary file deleted:", localPathFile);
            }
        });

        res.status(200).json({ message: "file uploaded successfully!", uploadfile });
    } catch (error) {
        console.log("some error has occured", error);
        res.status(500).json({ error: "file upload has failed" })
    }
}

const getFile = asynchandler(async(req,res)=>{
        const user = req.user.email;
        if(!user){
            return res.status(403).json({ message: "Invalid user, try logging in again" })
        }
        const docData = await User.findOne({email:user}).populate('filedata');
        const Docdata = docData.filedata;
        res.status(200).send(Docdata);
});


const writeDocument = asynchandler(async(req, res)=>{
    const{title, description, category} = req.body;
    if(!title || !description || !category){
        return res.status(203).json({message:"please write something"});
    }
    const user = req.user.email;
    if(!user){
        return res.status(203).json({message:"Invalid error occured !"})
    }
    const writedoc = new Document({title:title, description:description, category:category});
    await writedoc.save();
    const admin = await User.findOne({email:user});
    if(!admin){
        return res.status(303).json({message:"some invalid error has occured"});
    }
    admin.document.push(writedoc);
    await admin.save();
    res.status(200).json({message:"successfullys submited document"})
});


const getDocument = asynchandler(async(req, res)=>{
    const user = req.user.email;
    const admin = await User.findOne({email:user}).populate('document');
    if(!admin){
        return res.status(203).json({message:"some invalid error has occured try or login in again"})
    }
    const docdata = admin.document;
    return res.status(200).json(docdata);
})

const updateDocument = asynchandler(async(req, res) =>{
    const user = req.user.email;
    const {docid} = req.params;
    const{title, description, category} = req.body;
    const admin = await User.findOne({email:user});
    if(!admin){
        return res.status(203).json({message:"some invalid error has occured !"})
    }
    const update =await Document.updateOne(
        { _id: docid },
        { $set: { title:title, description:description, category:category } }
      );

    //   await update.save();
      return res.status(200).json({message:"updated successfully"});

});

const deleteDocument = asynchandler(async(req, res)=>{
    const {deleteid} = req.params;
    await Document.deleteOne({_id:deleteid});
    return res.status(200).json({message:"document deleted successfully"})
})

module.exports = { uploadDocument,getFile, writeDocument, getDocument , updateDocument, deleteDocument};