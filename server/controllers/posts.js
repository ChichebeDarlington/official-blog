import Posts from "../models/posts.js";

// create new post
export const createPost = async (req, res) => {
  const post = new Posts(req.body);
  try {
    const postSave = await post.save();
    res.status(201).json(postSave);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all post
export const getAllPost = async (req, res) => {
  const { username, categories } = req.query;
  //   const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Posts.find({ username });
    }
    if (categories) {
      posts = await Posts.find({
        categories: {
          $in: [categories],
        },
      });
    }
    posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
//get single post
export const getSinglePost = async (req, res) => {
  try {
    const singlePost = await Posts.findById(req.params.id);
    res.status(200).json(singlePost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update post
export const postUpdate = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    const post = await Posts.findById(id);
    if (post.username === username) {
      try {
        const updatedPost = await Posts.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(201).json("You can update only your own post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// delete post
export const postDelete = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    const post = await Posts.findById(id);
    if (post.username === username) {
      try {
        await post.deleteOne();
        res.status(200).json({ msg: "Post deleted" });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    } else {
      res.status(201).json("You can delete only your own post");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
