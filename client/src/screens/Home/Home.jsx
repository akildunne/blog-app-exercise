import React, { useEffect, useState } from 'react';
import BlogPosts from '../../components/BlogPosts/BlogPosts';
import './Home.css';
import { getBlogs } from '../../services/blogs';
import Layout from '../../components/shared/Layout/Layout'

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
    <Layout>
    <div className='home'>
      {blogJSX}
      </div>
    </Layout>

  )
}

export default Home;