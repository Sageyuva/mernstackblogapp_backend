const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose')
require('dotenv').config();


// Initilaize App
const app = express();
app.use(express.json());
app.use(cors());

// Connect to database

const dbcon = process.env.DB_URL

const connectTOdb = async() => {
try {
    await mongoose.connect(dbcon)
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
