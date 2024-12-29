import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { FC, FormEvent, useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaImage, FaVideo } from "react-icons/fa";
import Upload, { IImageResponse } from "../components/Upload";

interface IPost {
  img?: string;
  title: string;
  category: string;
  description: string;
  content: string;
  data?: { slug: string };
}

const Write: FC = (): React.JSX.Element => {
  const [content, setContent] = useState<string>("");
  const [cover, setCover] = useState<IImageResponse>();
  const [img, setImg] = useState<{ url: string }>();
  const [video, setVideo] = useState<{ url: string }>();
  const [progress, setProgress] = useState<number>();
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    img && setContent((prev) => prev + `<p><img src="${img.url}" /></p>`);
  }, [img]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    video &&
      setContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

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
      img: cover?.filePath || "",
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
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="p-2 shadow-md rounded-md text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload>
        <Upload setProgress={setProgress} setData={setCover} />
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
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <FaImage color="dodgerblue" />
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              <FaVideo color="#f43f5e" />
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 bg-white rounded-md h-[45vh]"
            onChange={setContent}
            readOnly={0 < progress! && progress! < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress! && progress! < 100)}
          className="bg-emerald-800 w-[10rem] text-white font-semibold py-2 rounded-md cursor-pointer hover:opacity-95 disabled:bg-emerald-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {progress && <span>{`Progress ${progress}%`}</span>}
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
