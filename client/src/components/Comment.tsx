import React, { FC } from "react";
import Image from "./Image";
import { format } from "timeago.js";

const Comment: FC<{
  description: string;
  user: { username: string };
  img: string;
  createdAt: string;
}> = ({
  description,
  user: { username },
  img,
  createdAt,
}: {
  description: string;
  user: { username: string };
  img: string;
  createdAt: string;
}): React.JSX.Element => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src={img}
          className="w-10 h-10 rounded-full object-cover border-[2px] border-emerald-800"
          alt="Profile"
        />
        <span className="font-semibold text-emerald-800">{username}</span>
        <span className="text-sm text-gray-500">{format(createdAt)}</span>
      </div>
      <div className="mt-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Comment;
