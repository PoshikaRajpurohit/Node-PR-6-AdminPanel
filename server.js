const express = require("express");
const port = 9005;
const path = require("path");
const dbconnect = require("./config/DbConnection");
const cookieParser = require("cookie-parser");

const app = express();


app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use(cookieParser());
app.use(express.urlencoded()); 
app.use("/", require("./routes/index.routes"));


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
