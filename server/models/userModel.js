const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/
    },
    password: {
        type: String,
        required: true,
    },
    jobs:[{type:mongoose.Schema.Types.ObjectId, ref:'Job'}],
    contact:[{type:mongoose.Schema.Types.ObjectId, ref:'Contact'}]

});



const User = mongoose.model("User", userSchema);
module.exports = User;