import React, { FC } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu: FC = (): React.JSX.Element => {
  return (
    <div>
      <h1 className="mb4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mb4 text-sm font-semibold mt-2">Filter</h1>
      <label htmlFor="sort" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newest"
          id="sort"
          className="appearance-none w-4 h-4 border-[1.5px] border-emerald-800 cursor-pointer rounded-sm checked:bg-emerald-800"
        />
        Newest{" "}
      </label>
      <label htmlFor="sort" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newest"
          id="sort"
          className="appearance-none w-4 h-4 border-[1.5px] border-emerald-800 cursor-pointer rounded-sm checked:bg-emerald-800"
        />
        Most Popular{" "}
      </label>
      <label htmlFor="sort" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newest"
          id="sort"
          className="appearance-none w-4 h-4 border-[1.5px] border-emerald-800 cursor-pointer rounded-sm checked:bg-emerald-800"
        />
        Trending{" "}
      </label>
      <label htmlFor="sort" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newest"
          id="sort"
          className="appearance-none w-4 h-4 border-[1.5px] border-emerald-800 cursor-pointer rounded-sm checked:bg-emerald-800"
        />
        Oldest{" "}
      </label>
      <h1 className="mb4 text-sm font-semibold mt-2">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Web development
        </Link>
        <Link className="underline" to="/posts?cat=dbs">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=seo">
          Search Engine
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
