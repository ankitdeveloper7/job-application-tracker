const mongoose = require("mongoose");

const mongourl = process.env.MONGODB_URI;

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(mongourl);
      console.log(`MongoDB connected successfully ${conn.connection.host}`)
    }catch(error){
        console.log("some error has occured", error)
    }
}

module.exports = connectDB;