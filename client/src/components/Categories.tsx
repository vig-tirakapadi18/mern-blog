import React, { FC } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Categories: FC = (): React.JSX.Element => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg justify-center items-center gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-emerald-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-dev"
          className="hover:bg-emerald-50 text-emerald-800 rounded-full px-4 py-2"
        >
          Web Development
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-emerald-50 text-emerald-800 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=dbs"
          className="hover:bg-emerald-50 text-emerald-800 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-emerald-50 text-emerald-800 rounded-full px-4 py-2"
        >
          Search Engine
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-emerald-50 text-emerald-800 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <Search />
    </div>
  );
};

export default Categories;
