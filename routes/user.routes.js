const express = require("express");
const userRoutes = express.Router();
const {addUserPage,viewAllUserPage,addNewUser,deleteUser,editUserPage, updateUser,} = require("../controller/user.controller");

const upload = require("../middleware/uploadImage");

userRoutes.get("/add-user", addUserPage);
userRoutes.get("/view-users", viewAllUserPage);
userRoutes.post("/add-user", upload.single("image"), addNewUser);
userRoutes.get("/delete-user/:id", deleteUser);
userRoutes.get("/edit-user/:id", editUserPage);
userRoutes.post("/update-user/:id", upload.single("image"), updateUser);



module.exports = userRoutes;
