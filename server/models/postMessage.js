import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
});

// Transforms the Schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
