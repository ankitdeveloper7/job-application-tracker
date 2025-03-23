const express =  require("express");
const router = express.Router();
const authenticationJwt = require("../middleware/auth");

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const{uploadDocument , getDocument, writeDocument} = require("../controllers/documentController")

router.post('/uploaddocument',authenticationJwt, upload.single('file'),uploadDocument);
router.get("/getfile", authenticationJwt,getDocument );
router.post("/writedocument", authenticationJwt, writeDocument);
router.get("/getdoc", authenticationJwt, getDocument)


module.exports = router;