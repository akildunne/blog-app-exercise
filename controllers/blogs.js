const Blog = require('../models/blog')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        if (blog) {
            return res.json(blog)
        }
        res.status(404).json({ message: 'Blog not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createBlog = async (req, res) => {
    try {
        const blog = await new Blog(req.body)
        await blog.save()
        res.status(201).json(blog)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateBlog = async (req, res) => {
    const { id } = req.params
    await Blog.findByIdAndUpdate(id, req.body, { new: true }, (error, blog) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!blog) {
            return res.status(404).json({ message: 'blog not found!' })
        }
        res.status(200).json(blog)
    })
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Blog.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Blog deleted")
        }
        throw new Error("Blog not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog,
}