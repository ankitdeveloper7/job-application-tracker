const express = require("express");
const router = express.Router();
const {saveContact} = require("../controllers/JobController");
const authenticationJwt = require("../middleware/auth");

router.post("/addcontact",authenticationJwt, saveContact );


module.exports =router;