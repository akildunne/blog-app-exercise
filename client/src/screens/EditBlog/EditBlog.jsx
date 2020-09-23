import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getBlog, updateBlog } from "../../services/blogs";

const EditBlog = (props) => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getBlog(id);
      setBlog(blog);
    };
    fetchBlog();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateBlog(id, blog);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/api/blogs/${props.match.params.id}`} />;
  }

  return (
    <Layout user={props.user}>
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
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default EditBlog;
