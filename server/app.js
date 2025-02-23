const express = require("express");
const userRoutes = require("./routes/userRoutes");
const JobRoutes = require("./routes/JobRoutes");
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true })); // Optional, for form data
// app.use(cors());

console.log(userRoutes);
console.log(typeof userRoutes);


app.use("/api/users", userRoutes);
app.use("/api/job", JobRoutes);


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})