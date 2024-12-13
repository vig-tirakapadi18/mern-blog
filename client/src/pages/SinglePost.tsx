import React, { FC } from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePost: FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="font-semibold text-xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi
            dolore doloremmt-2que ipsum enim excepturi.
          </h1>
          <span className="text-gray-400">
            Written by{" "}
            <Link to="/" className="font-semibold text-emerald-800">
              Vig VT
            </Link>{" "}
            on{" "}
            <Link to="/" className="font-semibold text-emerald-800">
              Web Design
            </Link>{" "}
            2 days ago
          </span>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            necessitatibus magnam commodi ipsam itaque adipisci illo pariatur
            natus, doloremque quisquam nam, reiciendis earum laboriosam sit
            veritatis magni minima? Repellat rem nostrum iure nulla aut! Commodi
            laborum perspiciatis praesentium cum voluptatum?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="blog5.webp" alt="Beach" className="rounded-2xl" />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            consequuntur fugit accusantium sint doloribus recusandae fugiat
            sequi quos expedita? Voluptates, sapiente sed enim, error obcaecati
            doloribus quas, ducimus aliquam deserunt quidem consectetur vel
            laborum neque placeat id. Quam illo corrupti distinctio deleniti
            aperiam optio delectus autem incidunt, enim voluptatum explicabo.
          </p>
        </div>
        <div className="px-4 h-max sticky top-8">
          <h1 className="text-xl font-semibold">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="blog5.webp"
                alt="Trees"
                className="w-12 h-12 rounded-full object-cover border-[2px] border-emerald-800"
                h={48}
                w={48}
              />
              <Link to="/" className="font-semibold text-emerald-800">
                Vig VT
              </Link>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              incidunt.
            </p>
            <div className="flex gap-4 justify-center mb-2">
              <Link to="">
                <AiFillInstagram size={28} color="#d62976" />
              </Link>
              <Link to="">
                <FaFacebook size={24} color="#316FF6" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="text-xl font-semibold mt-4 mb-2">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Web Development
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="text-xl font-semibold mt-4 mb-2">Search</h1>
          <Search classNames="border-[1px] border-gray-300 w-[20rem] mb-4" />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
