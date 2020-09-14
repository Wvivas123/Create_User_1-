const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/posts', async (req, res) => {
  const sendpost = new Posts({
    title: req.body.title,
    description: req.body.title,
  });
  try {
    const savedPost = await sendpost.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:postId', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:postId', async (req, res) => {
  try {
    const removePost = await Posts.deleteOne({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
