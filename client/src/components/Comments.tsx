import React, { FC } from "react";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ICommentProps {
  postId: string;
}

const fetchComments = async (postId: string) => {
  const comments = await axios.get(
    `${import.meta.env.VITE_API_URL as string}/comments/${postId}`
  );

  return comments.data;
};

const Comments: FC<ICommentProps> = ({
  postId,
}: ICommentProps): React.JSX.Element => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return <h1>Loading comments...</h1>;
  if (error) return <h1>Something went wrong: {error.message}</h1>;
  if (!data) return <h1>No comments found!</h1>;

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
      {data.map((comment: string) => (
        <Comment key={crypto.randomUUID()} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
