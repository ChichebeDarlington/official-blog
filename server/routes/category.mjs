import express from "express";

import { createCategories, fetchCategories } from "../controllers/category.mjs";

const router = express.Router();

router.post("/category-create", createCategories);
router.get("/fetch-category", fetchCategories);

export default router;
