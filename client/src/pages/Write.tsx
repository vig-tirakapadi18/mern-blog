import { useUser } from "@clerk/clerk-react";
import React, { FC } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Write: FC = (): React.JSX.Element => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div className="">Loading...</div>;

  if (isLoaded && !isSignedIn) return <div className="">You should login!</div>;

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="font-light text-2xl">Create a new Post</h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-6">
        <button className="p-2 shadow-md rounded-md text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
        />
        <div className="flex gap-4 items-center">
          <label htmlFor="category" className="font-semibold">
            Choose a category:
          </label>
          <select name="" id="category" className="bg-white p-2 rounded-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Web development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          placeholder="A Short Description"
          className="p-2 rounded-md shadow-md"
        />
        <ReactQuill theme="snow" className="flex-1 bg-white rounded-md" />
        <button className="bg-emerald-800 w-[10rem] text-white font-semibold py-2 rounded-md cursor-pointer hover:opacity-95">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
