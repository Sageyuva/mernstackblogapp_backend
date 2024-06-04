const express = require("express");
const Router = express.Router();
const {loginController  , deleteUser, registerController,  fetchAllUsersController} = require('../controllers/userController')
Router.post("/login", loginController);
Router.post("/register", registerController);
Router.get("/fetchUsers", fetchAllUsersController);
Router.delete("/deleteuser/:id" ,deleteUser )

module.exports = Router;