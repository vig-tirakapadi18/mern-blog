import { model, ObjectId, Schema } from "mongoose";

interface IPost {
  user: ObjectId;
  img?: string;
  title?: string;
  slug: string;
  description?: string;
  category?: string;
  content?: string;
  isFeatured?: boolean;
  visit?: number;
}

const postSchema = new Schema<IPost>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    img: { type: String },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    category: { type: String, default: "general" },
    content: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    visit: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const PostModel = model<IPost>("Post", postSchema);

export default PostModel;
