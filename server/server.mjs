import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import { DB } from "./database/db.mjs";
import authRoute from "./routes/auth.mjs";
import userRoute from "./routes/user.mjs";
import postsRoute from "./routes/posts.js";
import categoryRoute from "./routes/category.mjs";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postsRoute);
app.use("/api/category", categoryRoute);

app.get("/mazi", (req, res) => {
  console.log(" Mazi blog");
});

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "nike-shirt.jpg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(201).json("File uploaded");
});

// listening to requests
const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await DB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
