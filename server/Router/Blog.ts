import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { blogsModel } from "../database/blogs";

const router = express.Router();

router.get("/api/blogs/get", async (req: Request, res: Response) => {
  const blogs = await blogsModel.find({});
  return res.status(200).send(blogs);
});

router.post("/api/blogs/add", async (req: Request, res: Response) => {
  const blogTitle = req.body.blogTitle;
  const blogImage = req.body.blogImage;
  const blogAuthor = req.body.blogAuthor;
  const blogContent = req.body.blogContent;

  const newBlog = new blogsModel({
    _id: new mongoose.Types.ObjectId(),
    blogTitle: blogTitle,
    blogImage: blogImage,
    blogAuthor: blogAuthor,
    blogContent: blogContent,
  });
  newBlog
    .save()
    .then((results) => {
      return res.json(`${results.blogTitle} was added`);
    })
    .catch((error) => console.log(error));
});
router.get("/api/blogs/getOne", async (req: Request, res: Response) => {
  const blogs = await blogsModel.findOne({});
  return res.status(200).send(blogs);
});

export { router as Blogsrouter };
