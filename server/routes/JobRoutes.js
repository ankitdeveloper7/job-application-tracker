const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
// const  = require("../controllers/JobController");
const authenticationJwt = require("../middleware/auth");
const{addJob, getJobDetails, uploadDocument} = require("../controllers/JobController");


router.post('/addjob',authenticationJwt, addJob);
router.get('/getjobdetails', authenticationJwt, getJobDetails);
router.post('/uploaddocument', upload.single('avatar'),uploadDocument);

module.exports = router;
  

