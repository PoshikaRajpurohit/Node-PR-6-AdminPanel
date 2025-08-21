const User = require("../models/UserModel");
const path = require("path");
const fs = require("fs");

exports.addUserPage = async (req, res) => {
  if (
    req.cookies == null ||
    req.cookies.user == undefined ||
    req.cookies.user._id == undefined
  ) {
    return res.redirect("/");
  } else {
    let user = await User.findById(req.cookies.user._id)
    return res.render("add_user", {user})
  };
};

exports.viewAllUserPage = async (req, res) => {
  try {
    let users = await User.find();
    const userCookie = req.cookies.user;
    const user = userCookie ? await User.findById(userCookie._id) : null;

    return res.render("view_all_user", { users, user });
  } catch (error) {
    console.error(" Error loading users:", error);
    return res.redirect("back");
  }
};


exports.addNewUser = async (req, res) => {
  try {
    let imagePath = "";
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
      req.body.image = imagePath;
    }

    await User.create(req.body);
    return res.redirect("/user/view-users");  
  } catch (error) {
    console.log(error);
  }
};

exports.editUserPage = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (user) {
      return res.render("edit_user", { user });
    } else {
      return res.redirect("/user/view-users");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (user) {
      await User.findByIdAndDelete(req.params.id);
      return res.redirect("/user/view-users"); 
    }
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (user) {
      if (req.file) {
        let oldPath = path.join(__dirname, "..", user.image || "");
        try {
          fs.unlinkSync(oldPath);
        } catch (error) {
          console.log("Old image not found...");
        }

        req.body.image = `/uploads/${req.file.filename}`;
      }

      await User.findByIdAndUpdate(user._id, req.body, { new: true });
      return res.redirect("/user/view-users");
    } else {
      return res.redirect("/user/view-users");
    }
  } catch (error) {
    console.log(error);
  }
};
