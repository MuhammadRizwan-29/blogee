import { Router } from "express";
import { addBlog } from "../controller/blog.controller.js";
import upload from "../middleware/multer.middleware.js";
import auth from "../middleware/auth.middleware.js";

const addBlogRouter = Router();
addBlogRouter.post("/add-blog", upload.single("image"), auth, addBlog);

export default addBlogRouter;
