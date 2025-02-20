const express = require("express");

const router = express.Router();
const{registeruser, loginuser, updatePassword} = require("../controllers/userController");



router.post("/register", registeruser);
router.post("/login", loginuser);
router.put("/updatepassword", updatePassword);

module.exports = router;