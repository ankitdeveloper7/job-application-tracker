const express = require("express");
const router = express.Router();
const {saveContact,getContact, updateContact, deleteContact} = require("../controllers/contactController");
const authenticationJwt = require("../middleware/auth");

router.post("/addcontact",authenticationJwt, saveContact );
router.get("/getcontact", authenticationJwt, getContact);
router.put("/udpatecontact/:contactid", authenticationJwt,updateContact);
router.delete("/deletecontact/:contactid", authenticationJwt, deleteContact);


module.exports =router;