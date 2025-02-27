
require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const JobRoutes = require("./routes/JobRoutes");
const app = express();
app.use(express.json());
const PORT = Number(process.env.PORT) || 4000;

connectDB();
console.log( "this is the section of the result of jobroutes",JobRoutes);
console.log("this is the section of the type of the jobroutes",typeof JobRoutes);


app.use("/api/users", userRoutes);
app.use("/api/job", JobRoutes);


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})