const express =  require("express");
const router = express.Router();
const authenticationJwt = require("../middleware/auth");

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const{uploadDocument , getDocument, writeDocument, getFile, updateDocument, deleteDocument} = require("../controllers/documentController")

router.post('/uploaddocument',authenticationJwt, upload.single('file'),uploadDocument);
router.get("/getfile", authenticationJwt, getFile);
router.post("/writedocument", authenticationJwt, writeDocument);
router.get("/getdocument", authenticationJwt, getDocument);
router.put("/updatedocument/:docid", authenticationJwt, updateDocument);
router.delete("/deletedocument/:deleteid", authenticationJwt,deleteDocument )



module.exports = router;