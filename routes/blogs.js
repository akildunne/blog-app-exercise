const { Router } = require('express')
const controllers = require('../controllers/blogs')

const router = Router()

router.get('/blogs', controllers.getBlogs)
router.get('/blogs/:id', controllers.getBlog)
router.post('/blogs', controllers.createBlog)
router.put('/blogs/:id', controllers.updateBlog)
router.delete('/blogs/:id', controllers.deleteBlog)

module.exports = router