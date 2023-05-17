const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//creating a new post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (e) {
    res.status(500).json(e);
  }
});

//updating a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

//deleting a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.deleteOne();
        // await post.delete();
        res.status(200).json("Post has been deleted");
      } catch (e) {
        res.status(500).json("error: "+e);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

// get post
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
