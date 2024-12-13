import { model, Schema } from "mongoose";

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  description: { type: String },
});

const CommentModel = model("Comment", commentSchema);

export default CommentModel;
