const express = require('express');
const routes = express.Router();
const {dashBoard, loginPage, loginUser, logout,profilePage,changePassword, changePasswordPage} = require("../controller/index.controller");

routes.get("/", loginPage);
routes.get("/dashboard", dashBoard);    
routes.get("/change-password", changePasswordPage);
routes.post("/change-password", changePassword);
routes.post("/login", loginUser);
routes.get("/logout", logout);
routes.get("/profile", profilePage); 




routes.use("/user", require('./user.routes'))
routes.use("/blog", require('./blog.routes'))


module.exports = routes;