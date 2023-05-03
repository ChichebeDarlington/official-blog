import express from "express";

import {
  createPost,
  getAllPost,
  getSinglePost,
  postUpdate,
  postDelete,
} from "../controllers/posts.mjs";

const router = express.Router();

router.post("/post-create", createPost);
router.get("/get-all-post", getAllPost);
router.get("/get-single-post/:id", getSinglePost);
router.patch("/post-update/:id", postUpdate);
router.delete("/post-delete/:id", postDelete);

export default router;
