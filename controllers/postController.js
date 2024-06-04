const postModel = require("../models/postModels");

const newpostController = async (req, res) => {
    try {
        const { username, userid, heading, caption, tag } = req.body;

        const newpost = await postModel.create({ username, userid, heading, caption, tag });

        res.json(newpost);
    } catch (error) {
        console.error('Error adding post:', error.message);
        res.status(500).json({ error: 'Error adding post' });
    }
};

const fetchallposts = async (req, res) => {
    try {
        const allposts = await postModel.find();
        res.json(allposts);
    } catch (error) {
        console.error('Error fetching all posts:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const fetchonepost = async (req, res) => {
    try {
        const id = req.params.id
        const thatpost = await postModel.find({_id:id});
        res.json(thatpost);
    } catch (error) {
        console.error('Error fetching all posts:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deletepost = async (req, res) => {
    try {
        const id = req.params.id;
        const thatpost = await postModel.findOneAndDelete({ _id: id });
        res.json(thatpost);
    } catch (error) {
        console.error('Error deleting post:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updatepost = async (req, res) => {
    try {
        const id = req.params.id;
        const { username, userid, heading, caption, tag } = req.body;

        const thatpost = await postModel.findOneAndUpdate({ _id: id }, { username, userid, heading, caption, tag }, { new: true });
        res.json(thatpost);
    } catch (error) {
        console.error('Error updating post:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { newpostController, fetchallposts , fetchonepost  , deletepost , updatepost};