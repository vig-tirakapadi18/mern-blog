import React, { FC, useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const AllPosts: FC = (): React.JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prevState) => !prevState)}
        className="md:hidden bg-emerald-800 mb-2 px-4 py-2 text-white rounded-md"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
