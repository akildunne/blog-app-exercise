import React from "react";
import "./BlogPosts.css";
import { Link } from "react-router-dom";

const BlogPosts = (props) => {
  return (
    <>
      <Link className="blog-posts" to={`/api/blogs/${props.id}`}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <h4>{props.author}</h4>
      </Link>
    </>
  );
};

export default BlogPosts;
