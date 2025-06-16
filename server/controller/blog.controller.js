import fs from "fs";
import imagekit from "../config/imagekit.js";
import Blog from "../models/blog.model.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({
        success: false,
        message: "Missing required fileds",
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    /*--- Uploading image to IMAGEKIT ---*/

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blog",
    });

    /*--- Optimized through IMAGEKIT URL Transformation ---*/

    const optimizedImageURL = imagekit.url({
      path: response.filePath,
      transformation: [
        {
          quality: "auto",
        },
        {
          format: "webp",
        },
        {
          width: "1280",
        },
      ],
    });

    const image = optimizedImageURL;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.status(200).json({
      success: "true",
      message: "Blog has been added",
    });
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: error.message,
    });
  }
};
