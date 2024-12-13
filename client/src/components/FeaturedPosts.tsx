import React, { FC } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPosts: FC = (): React.JSX.Element => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2">
        <Image
          src="blog1.webp"
          className="rounded-3xl object-cover"
          alt="Blog1"
          w={895}
        />
        <div className="flex items-center gap-4 mt-3">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/posts" className="text-emerald-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        <Link to="/test" className="text-xl lg:text-3xl lg:font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          tempore.
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="blog2.webp"
              className="rounded-3xl object-cover"
              alt="Blog2"
              w={298}
            />
          </div>
          <div className="w-2/3">
            <div className=""></div>
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/posts" className="text-emerald-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              dignissimos!
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="blog2.webp"
              className="rounded-3xl object-cover"
              alt="Blog2"
              w={298}
            />
          </div>
          <div className="w-2/3">
            <div className=""></div>
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/posts" className="text-emerald-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              dignissimos!
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="blog2.webp"
              className="rounded-3xl object-cover"
              alt="Blog2"
              w={298}
            />
          </div>
          <div className="w-2/3">
            <div className=""></div>
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/posts" className="text-emerald-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              dignissimos!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
