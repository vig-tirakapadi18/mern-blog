import React, { FC } from "react";
import PostListItem from "./PostListItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IPostData {
  img?: string;
  title?: string;
  slug?: string;
  description?: string;
  content?: string;
  isFeatured?: boolean;
  visit?: number;
}

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);

  const data: IPostData[] = res.data;

  return data;
};

const PostList: FC = (): React.JSX.Element => {
  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An Error has occurred {error.message}</div>;

  console.log(data);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};

export default PostList;
