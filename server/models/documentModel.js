const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    title:{
        type:String,
        require:false
    },
    description:{
        type:String,
        require:false
    },
    filename:{
        type:String,
        require:false
    }
});

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;