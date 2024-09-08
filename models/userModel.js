const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: "string",
    email: "string",
    bio:"string",
    password: "string",
    
}, {
    timestamps: true
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
