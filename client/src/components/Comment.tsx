import React, { FC } from "react";
import Image from "./Image";

const Comment: FC = (): React.JSX.Element => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="blog5.webp"
          className="w-10 h-10 rounded-full object-cover border-[2px] border-emerald-800"
          alt="Profile"
        />
        <span className="font-semibold text-emerald-800">
          Vig VT
        </span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia in
          temporibus maxime natus est enim dolorem, consequuntur animi suscipit
          repellat earum voluptatibus vero numquam assumenda!
        </p>
      </div>
    </div>
  );
};

export default Comment;
