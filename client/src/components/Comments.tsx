import React, { FC } from "react";
import Comment from "./Comment";

const Comments: FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-6 lg:w-3/5">
      <h1 className="text-2xl text-gray-500">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          name=""
          id=""
          placeholder="Write a comment..."
          className="w-full p-2 border-[2px] rounded-md border-gray-300"
        />
        <button className="bg-emerald-800 font-semibold text-white px-8 py-2 rounded-md cursor-pointer hover:opacity-95">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
