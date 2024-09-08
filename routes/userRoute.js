const express = require("express");
const Router = express.Router();
const {fetchSingleUserController , updateUserController ,loginController  , deleteUser, registerController,  fetchAllUsersController} = require('../controllers/userController')
Router.post("/login", loginController);
Router.post("/register", registerController);
Router.get("/fetchUsers", fetchAllUsersController);
Router.delete("/deleteuser/:id" ,deleteUser )
Router.post("/singleuser" , fetchSingleUserController)
Router.post("/updateuser/:id" , updateUserController)

module.exports = Router;