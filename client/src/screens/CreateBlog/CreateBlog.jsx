import React, { useState } from "react";
import { createBlog } from "../../services/blogs";
import { Redirect } from "react-router-dom";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createBlog(blog);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/api/blogs`} />;
  }

  return (
    <form className="create-blog" onSubmit={handleSubmit}>
      <input
        className="input-title"
        placeholder="Title"
        value={blog.title}
        name="title"
        required
        autoFocus
        onChange={handleChange}
      />
      <textarea
        className="input-content"
        rows={10}
        columns={50}
        placeholder="Start writing here"
        value={blog.content}
        name="content"
        required
        onChange={handleChange}
      />
      <input
        className="input-author"
        placeholder="Your Name"
        value={blog.author}
        name="author"
        required
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default CreateBlog;
