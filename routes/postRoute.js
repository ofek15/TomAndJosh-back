const express = require('express')
const { fetchPosts, publishPost, fetchOnePost } = require('../controllers/postController')
const router = express.Router()

router.get('/fetchposts', fetchPosts)
router.post('/publishpost', publishPost)
router.get('/fetchOnePost', fetchOnePost)

module.exports = router