import React, { FC } from "react";

interface SearchProps {
  classNames?: string;
}

const Search: FC<SearchProps> = ({classNames}: SearchProps): React.JSX.Element => {
  return (
    <div
      className={`bg-gray-100 rounded-full flex items-center gap-2 py-2 px-2 max-w-[12rem] ${classNames}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search a post..."
        className="bg-transparent max-w-[8rem]"
      />
    </div>
  );
};

export default Search;
