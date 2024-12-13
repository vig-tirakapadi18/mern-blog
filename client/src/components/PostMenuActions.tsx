import React, { FC } from "react";
import { FaBookmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const PostMenuActions: FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <h1 className="text-xl font-semibold">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer border-[2px] border-gray-500 pl-2 rounded-md">
        <FaBookmark color="dodgerblue" size={24} />
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer border-[2px] border-gray-500 pl-2 rounded-md">
        <MdDelete color="#e11d48" size={28} />
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
