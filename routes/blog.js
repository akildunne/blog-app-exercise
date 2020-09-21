const { Router } = require('express')
const controllers = require('../controllers/blogs')

const router = Router()

router.get('/blogs', controllers.getBlogs)
router.get('/blogs/:id', controllers.getProduct)
router.post('/blogs', controllers.createProduct)
router.put('/blogs/:id', controllers.updateProduct)
router.delete('/blogs/:id', controllers.deleteProduct)

module.exports = router