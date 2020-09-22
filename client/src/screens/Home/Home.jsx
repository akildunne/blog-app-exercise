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

  return (
    <div className='home'>
      <BlogPosts/>
    </div>

  )
}

export default Home;