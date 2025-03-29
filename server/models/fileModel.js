const mongoose = require("mongoose");


const fileSchema = new mongoose.Schema({
       filename:{
           type:String,
           require:false
       }
});

const Filedata = mongoose.model("Filedata", fileSchema);
module.exports = Filedata;