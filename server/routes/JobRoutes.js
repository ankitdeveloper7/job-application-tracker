const express = require('express');
const router = express.Router();
// const  = require("../controllers/JobController");
const authenticationJwt = require("../middleware/auth");
const{addJob, getJobDetails} = require("../controllers/JobController");


router.post('/addjob',authenticationJwt, addJob);
router.get('/getjobdetails', authenticationJwt, getJobDetails);

module.exports = router;
  

