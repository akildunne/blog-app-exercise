import React from 'react';
import './BlogPosts.css';

const BlogPosts = (props) => {
  return (
    <div className='blog-posts'>
      <h3>
        {props.title}
      </h3>
      <p>
        {props.content}
      </p>
      <h4>
        {props.author}
      </h4>
    </div>
  )
}

export default BlogPosts; 