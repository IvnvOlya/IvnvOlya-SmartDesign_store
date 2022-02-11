import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
