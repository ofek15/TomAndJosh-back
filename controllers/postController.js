const Post = require("../models/postModel");

const fetchPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const publishPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    return res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const fetchOnePost = async (req, res) => {
  try {
    const allPosts = await Post.findOne({ room_id: req.query.roomNumber });
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { fetchPosts, publishPost, fetchOnePost };
