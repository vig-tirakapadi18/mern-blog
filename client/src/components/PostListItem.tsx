import React, { FC } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem: FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="blog3.jpg"
          className="rounded-2xl object-cover"
          alt="Blog3"
          w={735}
        />
      </div>

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          mollitia!
        </Link>
        <div className="">
          <span className="text-gray-500">
            Written by{" "}
            <Link to="/" className="text-emerald-800 font-semibold">
              Vig VT
            </Link>{" "}
            on{" "}
            <Link to="/" className="text-emerald-800 font-semibold">
              Web Design
            </Link>{" "}
            2 days ago
          </span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          earum tempore cumque repellendus placeat ut, repudiandae consectetur
          reprehenderit culpa autem excepturi animi. Cum, culpa pariatur?
        </p>
        <Link to="/" className="underline text-emerald-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
