const express = require('express');
const userRoutes = express.Router();
const {addUserPage, viewAllUserPage, addNewUser,deleteUser, editUserPage, updateUser} = require("../controller/user.controller");
const User = require('../models/UserModel');

userRoutes.get("/add-user", addUserPage);

userRoutes.get("/view-users", viewAllUserPage);

userRoutes.post("/add-user", User.uploadImage, addNewUser);

userRoutes.get("/delete-user/:id", deleteUser);


userRoutes.get("/edit-user/:id", editUserPage);

userRoutes.post("/update-user/:id", User.uploadImage, updateUser);


module.exports = userRoutes;