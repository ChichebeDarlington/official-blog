import express from "express";

import { UserUpdate, UserDelete, singleUser } from "../controllers/user.mjs";

const router = express.Router();

router.get("/user-single/:id", singleUser);
router.patch("/user-update/:id", UserUpdate);
router.delete("/user-delete/:id", UserDelete);

export default router;
