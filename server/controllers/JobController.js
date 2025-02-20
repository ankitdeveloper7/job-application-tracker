const asynchandler = require("express-async-handler");
const Job = require("../models/jobModel");

const listJob = asynchandler(async(req, res)=>{
    const{title,company,urlAddress,status} = req.body;
    if(!title){
        return res.status(400).json({message:"Title is required for adding job"});
    }
    const newjob = new Job({title,company,urlAddress,status});
    await newjob.save();
    res.status(200).json({message:"you have successfully list you job"});
});

module.exports = {listJob}