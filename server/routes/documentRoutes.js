const express =  require("express");
const router = express.Router();
const authenticationJwt = require("../middleware/auth");

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const{uploadDocument , getDocument, writeDocument, getFile} = require("../controllers/documentController")

router.post('/uploaddocument',authenticationJwt, upload.single('file'),uploadDocument);
router.get("/getfile", authenticationJwt, getFile);
router.post("/writedocument", authenticationJwt, writeDocument);
router.get("/getdocument", authenticationJwt, getDocument)


module.exports = router;