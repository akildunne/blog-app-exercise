import React, { useEffect, useState } from 'react';
import BlogPosts from '../../components/BlogPosts/BlogPosts';
import './Home.css';
import { getBlogs } from '../../services/blogs';

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs()
      setAllBlogs(blogs)
    }
    fetchBlogs()
  }, [])

  const blogJSX = allBlogs.map((blog, index) =>
    <BlogPosts key={index} title={blog.title} content={blog.content} author={blog.author} id={blog._id}/>
  )


  return (
    <div className='home'>
      {blogJSX}
    </div>

  )
}

export default Home;