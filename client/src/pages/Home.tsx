import React from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Home = (): React.JSX.Element => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <span className="text-emerald-800">Blogs and Articles</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            quia.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quas quod impedit ad quae mollitia minus accusamus soluta quibusdam
          </p>
        </div>
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width={200}
            height={200}
            className="tracking-widest animate-spin animated-btn"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              className="text-lg tracking-widest"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your story
              </textPath>
            </text>
          </svg>
          <button className="absolute top-14 left-14 right-0 bottom-0 w-20 h-20 bg-emerald-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      <Categories />

      <FeaturedPosts />

      <div>
        <h1 className="my-8 text-2xl text-gray-500">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Home;
