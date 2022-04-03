import mongoose from "mongoose";

const user = mongoose.Schema({
  username: String,
  email: String,
  profilePic: String,
  // todo ===========
  // Last visited youtube search
  // Tar deg tilbake til forrige search selv om man redirecter eller signer inn eller no
  // Trenger bare å gjøre dette når brukeren ikke er inne på default
  //
  lastVisited: String,
});

// Transforms the Schema into a model
const UserData = mongoose.model("Users", user);

export default UserData;
