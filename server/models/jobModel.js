const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    urlAddress:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    workMode:{
        type:String,
        required:true,
        enum:["onSite","Hybrid", "Remote"]
    },
    status:{
        type:String,
        required:true,
        enum:["wishlist","applied","interview","offer","rejected"]
    }
})
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;