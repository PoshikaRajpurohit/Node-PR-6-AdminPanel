const mongoose = require("mongoose");
const multer = require("multer");
const path = require('path');

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  gender: String,
  hobbies: Array,
  image: String,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`);
  }
});

userSchema.statics.uploadImage = multer({storage: storage}).single('image');

const User = mongoose.model("User", userSchema);


module.exports = User;