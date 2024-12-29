import React, { FC } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { IPostData } from "./PostList";

interface IPostParams extends IPostData {
  user: { username: string };
  category: string;
  createdAt: string;
}

const PostListItem: FC<{ post: IPostParams }> = ({
  post: {
    img,
    slug,
    title,
    user: { username },
    category,
    createdAt,
  },
}: {
  post: IPostParams;
}): React.JSX.Element => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src={img!}
          className="rounded-2xl object-cover"
          alt="Blog3"
          w={735}
        />
      </div>

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${slug}`} className="text-4xl font-semibold">
          {title}
        </Link>
        <div className="">
          <span className="text-gray-500">
            Written by{" "}
            <Link
              to={`/posts?author=${username}`}
              className="text-emerald-800 font-semibold"
            >
              {username}
            </Link>{" "}
            on{" "}
            <Link to="/" className="text-emerald-800 font-semibold">
              {category}
            </Link>{" "}
            {format(createdAt)}
          </span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          earum tempore cumque repellendus placeat ut, repudiandae consectetur
          reprehenderit culpa autem excepturi animi. Cum, culpa pariatur?
        </p>
        <Link to={`/${slug}`} className="underline text-emerald-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
