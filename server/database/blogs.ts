import { Document, Schema, model } from "mongoose";
export default interface IBlogs extends Document {
  blogTitle: string;
  blogImage: string;
  blogAuthor: string;
  blogContent: string;
}
const blogSchema = new Schema<IBlogs>({
  blogTitle: { type: String },
  blogImage: String,
  blogAuthor: String,
  blogContent: String,
});
export const blogsModel = model<IBlogs>("blogs", blogSchema);
