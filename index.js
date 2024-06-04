const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose')

// Initilaize App
const app = express();
app.use(express.json());
app.use(cors());

// Connect to database

const connectTOdb = async() => {
try {
    await mongoose.connect("mongodb://localhost:27017/mernblog")
    console.log("connected to DATA BASE")
} catch (error) {
    console.log("failed to connect to data base")
}
}

connectTOdb()

// Importing Routes
const userRoute = require("./routes/userRoute.js");
const postRoute = require("./routes/postRoute.js");


app.use("/user", userRoute);
app.use("/post" , postRoute)

app.listen(5000, () => {
    console.log("API SERVER IS ONLINE");
});
