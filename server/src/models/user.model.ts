import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    clerkUserId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    img: { type: String },
    savedPosts: { type: [String], default: [] },
  },
  { timestamps: true }
);

const UserModel = model("User", userSchema);

export default UserModel;
