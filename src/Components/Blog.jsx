import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const Blog = () => {
  return (
    <section>
      <div className=" bg-slate-100">
        <div class="grid grid-cols-3 gap-8 max-w-6xl m-auto pt-24 ">
          <div style={{ background: "url(image/blog1.png)" }} className=" h-80">
            <div className="bg-darklight w-full h-full flex items-center">
              <div className=" w-[280px] m-auto">
                <h1 className=" font-pop font-bold text-2xl text-white">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </h1>
                <button className="px-5 py-2.5 uppercase bg-slate-400 text-white mt-8 border border-slate-500 hover:bg-transparent hover:border-white ease-linear duration-200">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div style={{ background: "url(image/blog2.png)" }} className=" h-80">
            <div className="bg-darklight w-full h-full flex items-center">
              <div className=" w-[280px] m-auto">
                <h1 className=" font-pop font-bold text-2xl text-white">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </h1>
                <button className="px-5 py-2.5 uppercase bg-slate-400 text-white mt-8 border border-slate-500 hover:bg-transparent hover:border-white ease-linear duration-200">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div style={{ background: "url(image/blog3.png)" }} className=" h-80">
            <div className="bg-darklight w-full h-full flex items-center">
              <div className=" w-[280px] m-auto">
                <h1 className=" font-pop font-bold text-2xl text-white">
                  lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod.
                </h1>
                <button className="px-5 py-2.5 uppercase bg-slate-400 text-white mt-8 border border-slate-500 hover:bg-transparent hover:border-white ease-linear duration-200">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-6xl flex justify-end pt-5 ml-20 pb-20">
          <a
            href="#"
            className=" inline-flex font-bold hover:text-red-500 ease-linear duration-200"
          >
            MORE FROM THE BLLOG <FaGreaterThan className=" ml-3 mt-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
