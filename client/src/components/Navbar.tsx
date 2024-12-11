import { SignedOut } from "@clerk/clerk-react";
import React, { FC, useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar: FC = (): React.JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-16 md:h-20 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <FaEnvelopeOpenText size={34} color="#059669" />
        <span className="text-2xl font-bold">MyLog</span>
      </Link>
      <div className="md:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {open ? <IoClose size={32} /> : <IoMenu size={32} />}
        </button>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out gap-8 text-2xl font-semibold ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/most-popular">Most Popular</Link>
          <Link to="/about">About</Link>
          <Link to="/login">
            <button className="bg-emerald-600 px-8 py-2 rounded-full text-white font-semibold">
              Log In
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/most-popular">Most Popular</Link>
        <Link to="/about">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="bg-emerald-600 px-8 py-2 rounded-full text-white font-semibold">
              Log In
            </button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
