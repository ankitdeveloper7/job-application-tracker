const asynchandler = require("express-async-handler");
const Job = require("../models/jobModel");
const User = require("../models/userModel");

const addJob = asynchandler(async (req, res) => {

    const { title, company, urlAddress,location, workMode, status } = req.body;
    if (!title || !company || !status || !workMode) {
        return res.status(403).json({ message: "Both title and comapny is required to list the job" })
    }
    const newJob =  new Job({ title, company, urlAddress,location, workMode, status });
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
    // console.log("this is the job list of the user", jobslist);
    return res.status(200).json(jobslist);
})


module.exports = { addJob, getJobDetails };