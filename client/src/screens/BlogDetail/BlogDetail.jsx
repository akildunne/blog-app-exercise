import React, { useEffect, useState } from "react";
import { getBlog, getBlogs } from "../../services/blogs";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
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

  return (
    <div className="blog-detail">
      <h3>{blogDetail.title}</h3>
      <p>{blogDetail.content}</p>
      <h4>{blogDetail.author}</h4>
    </div>
  );
};

export default BlogDetail;
