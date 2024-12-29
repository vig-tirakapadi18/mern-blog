import { Document, model, ObjectId, Schema } from "mongoose";

export interface IUser extends Document {
  clerkUserId: string;
  username: string;
  email: string;
  img: string;
  savedPosts: string[];
}

const userSchema = new Schema<IUser>(
  {
    clerkUserId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    img: { type: String },
    savedPosts: { type: [String], default: [] },
  },
  { timestamps: true }
);

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
