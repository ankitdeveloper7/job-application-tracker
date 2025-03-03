const asynchandler = require("express-async-handler");
const Job = require("../models/jobModel");
const fs = require("fs");
const uploadOnCloudinary = require("../utils/Cloudinary");
const User = require("../models/userModel");

const addJob = asynchandler(async (req, res) => {

    const { title, company, urlAddress, status } = req.body;
    if (!title || !company) {
        return res.status(403).json({ message: "Both title and comapny is required to list the job" })
    }
    const newJob =  new Job({ title, company, urlAddress, status });
    await newJob.save();
    const admin = await User.findOne({ email: req.user.email });
    if (!admin) {
        return res.status(403).json({ message: "Invalid user, try logging in again after add jobs" })
    }
    admin.jobs.push(newJob);
    await admin.save();

    return res.status(200).json({ message: "Job listed successfully !" })


});

const getJobDetails = asynchandler(async (req, res) => {
    const user = req.user.email;
    if (!user) {
        return res.status(403).json({ message: "Some Invalid error has occured !" });
    }
    const userData = await User.findOne({ email: user }).populate('jobs');
    const jobslist = userData.jobs;
    console.log("this is the job list of the user", jobslist);
    return res.status(200).json(jobslist);
})

const uploadDocument = async function (req, res, next) {
    try {

        if (!req.file) {
            return res.status(500).json({ message: "file not uploaded" });
        }

        const localPathFile = req.file.path;
        const uploadfile = await uploadOnCloudinary(localPathFile);

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

module.exports = { addJob, uploadDocument, getJobDetails };