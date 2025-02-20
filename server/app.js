const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/api/users", userRoutes);


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})