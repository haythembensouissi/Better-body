import { useState } from "react";
import Axios from "axios";

export default function Addblog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const addblog = () => {
    Axios.post("http://localhost:2000/api/blogs/add", {
      blogTitle,
      blogImage,
      blogAuthor,
      blogContent,
    });
    console.log("done");
  };

  return (
    <form>
      <label htmlFor="title">title :</label>

      <input
        onChange={(e) => {
          setBlogTitle(e.target.value);
        }}
        type="text"
        name="blogTitle"
        id="blogTitle"
        placeholder="Title"
      />
      <label htmlFor="Author">Author :</label>

      <input
        onChange={(e) => {
          setBlogAuthor(e.target.value);
        }}
        type="text"
        name="blogAuthor"
        id="blogAuthor"
        placeholder="Author"
      />
      <br />
      <label htmlFor="content">content :</label>

      <textarea
        onChange={(e) => {
          setBlogContent(e.target.value);
        }}
        name="blogContent"
        id="blogContent"
        placeholder="content"
      ></textarea>
      <button onClick={() => addblog()} type="submit">
        Submit
      </button>
    </form>
  );
}
