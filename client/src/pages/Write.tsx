import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { FC, FormEvent, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IPost {
  title: string;
  category: string;
  description: string;
  content: string;
  data?: { slug: string };
}

const Write: FC = (): React.JSX.Element => {
  const [content, setContent] = useState<string>("");
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();

  const navigate = useNavigate();

  const mutation = useMutation<IPost, Error, IPost>({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/posts/create-post`,
        newPost,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },
    onSuccess: (response) => {
      toast.success("Post created successfully!");
      navigate(`/${response.data!.slug}`);
    },
  });

  if (!isLoaded) return <div className="">Loading...</div>;

  if (isLoaded && !isSignedIn) return <div className="">You should login!</div>;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newPost: IPost = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      content: content,
    };

    mutation.mutate(newPost);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="font-light text-2xl">Create a new Post</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-6 flex-1 mb-6"
      >
        <button className="p-2 shadow-md rounded-md text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex gap-4 items-center">
          <label htmlFor="category" className="font-semibold">
            Choose a category:
          </label>
          <select
            name="category"
            id="category"
            className="bg-white p-2 rounded-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Web development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="description"
          id=""
          placeholder="A Short Description"
          className="p-2 rounded-md shadow-md"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 bg-white rounded-md"
          onChange={setContent}
        />
        <button
          disabled={mutation.isPending}
          className="bg-emerald-800 w-[10rem] text-white font-semibold py-2 rounded-md cursor-pointer hover:opacity-95 disabled:bg-emerald-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {mutation.isError && (
          <span className="text-rose-500 font-semibold">
            {mutation.error.message}!
          </span>
        )}
      </form>
    </div>
  );
};

export default Write;
