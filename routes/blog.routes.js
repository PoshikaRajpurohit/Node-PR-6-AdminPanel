const express = require("express");
const blogRoutes = express.Router();
const { addBlogPage, viewAllBlogsPage,deleteBlog,addNewBlog ,editBlogPage,updateBlog,viewSingleBlog, MyBlogsPage} = require("../controller/blog.controller");


const upload = require("../middleware/uploadImage");
blogRoutes.get("/add-blog", addBlogPage);
blogRoutes.get("/view-all-blogs", viewAllBlogsPage);
blogRoutes.get("/my-blogs", MyBlogsPage);
blogRoutes.get("/single-blog/:id", viewSingleBlog);
blogRoutes.post("/add-blog", upload.single("image"), addNewBlog);
blogRoutes.get("/edit_blog/:id", editBlogPage);
blogRoutes.get("/delete-blog/:id", deleteBlog);
blogRoutes.post("/update-blog/:id", upload.single("image"), updateBlog);



module.exports = blogRoutes;
