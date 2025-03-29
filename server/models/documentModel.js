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
    category:{
        type:String,
        require:true,
        enum:["Resume", "Cover Letter", "Transcript"]
    }
});

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;