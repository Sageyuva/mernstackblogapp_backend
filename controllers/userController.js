const bcrypt = require('bcryptjs');
const userModel = require("../models/userModel");
const postModel = require("../models/postModels")

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid Email' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(402).json({ error: 'Invalid Password' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const registerController = async (req, res) => {
    try {
        const { name, email, bio , password } = req.body;

        // Check if email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user with hashed password
        const newUser = await userModel.create({ name,  bio , email, password: hashedPassword });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const fetchAllUsersController = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const fetchSingleUserController = async (req, res) => {
    try {
        const {userId} = req.body;
        const allUsers = await userModel.find({_id:userId});
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const deleteUser = async(req,res) => {

    try {
        const id = req.params.id
        const thatuser = await userModel.findOneAndDelete({_id: id})
        const allPosts = await postModel.deleteMany({userid:id})
        res.json("user deleted")
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const updateUserController = async (req,res) => {
    try {
        const id = req.params.id
        const {name, bio} = req.body
        const thatuser = await userModel.findOneAndUpdate({_id: id},{name , bio})
        res.json("user updated")
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    updateUserController ,
    loginController,
    registerController,
    fetchAllUsersController,
    deleteUser,
    fetchSingleUserController
};
