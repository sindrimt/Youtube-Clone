import mongoose from "mongoose";

const user = mongoose.Schema({
  username: String,
  email: String,
  profilePic: String,
});

// Transforms the Schema into a model
const UserData = mongoose.model("Users", user);

export default UserData;
