const express = require("express");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
const{registeruser, loginuser, sendOtp,verifyOtp, updatePassword, uploadProfile} = require("../controllers/userController");



router.post("/register", registeruser);
router.post("/login", loginuser);
router.post("/sendotp", sendOtp );
router.post("/verifyotp", verifyOtp);
router.put("/updatepassword", updatePassword);
// router.post('/uploaddocument', upload.single('avatar'),uploadProfile);

module.exports = router;