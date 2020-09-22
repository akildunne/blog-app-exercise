import React, { useEffect, useState } from "react";
import { getBlog, deleteBlog } from "../../services/blogs";
import { useParams } from "react-router-dom";
import Layout from '../../components/shared/Layout/Layout'

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
    <Layout>
    <div className="blog-detail">
      <h3>{blogDetail.title}</h3>
      <p>{blogDetail.content}</p>
      <h4>{blogDetail.author}</h4>
      {/* <button className="delete-button" onClick={() => deleteBlog(blogDetail._id)}>Delete</button> */}
      </div>
    </Layout>
  );
};

export default BlogDetail;
