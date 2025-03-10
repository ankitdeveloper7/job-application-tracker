const express = require("express");
const router = express.Router();
const {saveContact,getContact} = require("../controllers/contactController");
const authenticationJwt = require("../middleware/auth");

router.post("/addcontact",authenticationJwt, saveContact );
router.get("/getcontact", authenticationJwt, getContact);


module.exports =router;