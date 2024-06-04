const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    username: "string",
    userid: "string",
    heading: "string",
    caption:"string",
    tag:"string",
}
, {
    timestamps: true
})

const postModel = mongoose.model("posts" , postSchema)
module.exports= postModel