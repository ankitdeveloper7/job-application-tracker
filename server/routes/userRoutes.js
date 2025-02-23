const express = require("express");

const router = express.Router();
const{registeruser, loginuser, sendOtp,verifyOtp, updatePassword} = require("../controllers/userController");



router.post("/register", registeruser);
router.post("/login", loginuser);
router.post("/sendopt", sendOtp );
router.post("/verifyotp", verifyOtp);
router.put("/updatepassword", updatePassword);

module.exports = router;