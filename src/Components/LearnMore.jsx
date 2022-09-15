import React from "react";

const LearnMore = () => {
  return (
    <section>
      <div className=" bg-slate-100">
        <div className=" max-w-6xl flex m-auto py-28">
          <div className=" w-1/3 bg-bg-red-custom">
            <p className=" text-3xl font-pop font-bold text-white py-24 px-20">
              Learn more about our company
            </p>
          </div>
          <div
            className=" w-2/3 h-80 flex"
            style={{ background: "url(image/learn.png)" }}
          >
            <div className=" m-auto ">
              <button className="px-8 py-3 uppercase font-bold bg-white text-red-500 mt-8 border border-red-600 hover:bg-transparent hover:border-white hover:text-white ease-linear duration-200">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
