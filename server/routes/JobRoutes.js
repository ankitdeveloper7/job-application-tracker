const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const uploadDocument = require("../controllers/JobController");



router.post('/uploaddocument', upload.single('avatar'),uploadDocument);

module.exports = router;
  

