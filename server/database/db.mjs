import mongoose from "mongoose";

export const DB = (URI) => {
  return mongoose.connect(URI);
};
