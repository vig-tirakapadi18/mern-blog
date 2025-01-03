import React, { FC, FormEvent } from "react";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";

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

  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment: {
      description: string;
      user?: string;
      post?: string;
    }) => {
      const token = await getToken();

      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error: AxiosError) => {
      toast.error(`Failed to create comment: ${error.message}`);
    },
  });

  if (isPending) return <h1>Loading comments...</h1>;
  if (error) return <h1>Something went wrong: {error.message}</h1>;
  if (!data) return <h1>No comments found!</h1>;

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = { description: formData.get("description") as string };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-6 lg:w-3/5">
      <h1 className="text-2xl text-gray-500">Comments</h1>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="description"
          id=""
          placeholder="Write a comment..."
          className="w-full p-2 border-[2px] rounded-md border-gray-300"
        />
        <button className="bg-emerald-800 font-semibold text-white px-8 py-2 rounded-md cursor-pointer hover:opacity-95">
          Send
        </button>
      </form>
      {data.map(
        (comment: {
          description: string;
          user: { username: string };
          img: string;
          createdAt: string;
        }) => (
          <Comment
            key={crypto.randomUUID()}
            description={comment.description}
            user={comment.user}
            img={comment.img}
            createdAt={comment.createdAt}
          />
        )
      )}
    </div>
  );
};

export default Comments;
