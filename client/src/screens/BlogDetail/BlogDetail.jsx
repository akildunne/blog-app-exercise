import React, { useEffect, useState } from "react";
import { getBlog, deleteBlog } from "../../services/blogs";
import { useParams, Redirect } from "react-router-dom";

const BlogDetail = () => {
  const [redirect, setRedirect] = useState(false);
  const [blogDetail, setBlogDetail] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const blogs = await getBlog(id);
      setBlogDetail(blogs);
      setLoaded(true);
    };
    fetchBlogDetail();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const blogDeleted = (e) => {
    deleteBlog(blogDetail._id);
    setRedirect(true);
  }

  if (redirect === true) {
    return <Redirect to='/api/blogs' />;
  }

  return (
    <div className="blog-detail">
      <h3>{blogDetail.title}</h3>
      <p>{blogDetail.content}</p>
      <h4>{blogDetail.author}</h4>
      <button className="delete-button" onClick={(e) => blogDeleted(e)}>Delete</button>
    </div>
  );
};

export default BlogDetail;
