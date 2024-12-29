import React, { FC } from "react";
import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export interface IPostData {
  _id?: string
  img?: string;
  title?: string;
  slug?: string;
  description?: string;
  content?: string;
  isFeatured?: boolean;
  visit?: number;
}

const fetchPosts = async (pageParam: number) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam },
  });

  const data: IPostData[] = res.data;

  return data;
};

const PostList: FC<{
  pageParam: number;
}> = ({ pageParam }: { pageParam: number }): React.JSX.Element => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(pageParam),
    initialPageParam: 1,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getNextPageParam: (lastPage: any, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  // if (status === "pending") return <div>Loading...</div>;

  if (status === "error")
    return <div>An Error has occurred {error.message}</div>;

  console.log(data);
  const allPosts = data?.pages?.flatMap((page) => page.posts);

  return (
    <InfiniteScroll
      dataLength={allPosts!.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading More Posts...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! All posts loaded successfully!</b>
        </p>
      }
    >
      {allPosts?.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
