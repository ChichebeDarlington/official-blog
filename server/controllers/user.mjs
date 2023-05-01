import User from "../models/user.mjs";
import Post from "../models/posts.js";
import { comparePassword, hashPassword } from "../bcrypt/bAuth.mjs";

export const UserUpdate = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      req.body.password = await hashPassword(req.body.password);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json({ msg: "Only your account can be updated" });
  }
};

export const UserDelete = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "user deleted........" });
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status.json({ error: "No user found" });
      console.log(error);
    }
  } else {
    res.status(401).json({ error: "Only your account can be deleted" });
  }
};

export const singleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
