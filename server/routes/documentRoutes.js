const express =  require("express");
const router = express.Router();
const authenticationJwt = require("../middleware/auth");

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const{uploadDocument} = require("../controllers/documentController")

router.post('/uploaddocument',authenticationJwt, upload.single('file'),uploadDocument);


module.exports = router;