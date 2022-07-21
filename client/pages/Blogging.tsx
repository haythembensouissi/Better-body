import { useState } from "react";
import Addblog from "./AddBlog";

export default function Blogging({ blogs }: any) {
  const [bblogs, setBlogs] = useState(blogs);
  const [addblog, setAdd] = useState(false);

  function form() {
    if (addblog === false) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }

  return (
    <div>
      <h1>feel free and create a new blog here</h1>
      <button onClick={() => form()}>add blog</button>
      {addblog && (
        <div>
          {" "}
          <Addblog />
        </div>
      )}

      {bblogs.map((blog: any, index: number) => (
        <div key={index}>
          <h1>{blog.blogTitle}</h1>
          <img src={blog.image} alt="" />
          <h3>{blog.blogAuthor}</h3>
          <p>{blog.blogContent}</p>
        </div>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const blogs = await fetch("http://localhost:2000/api/blogs/get").then(
    (response) => response.json()
  );

  return {
    props: {
      blogs,
    },
  };
}
