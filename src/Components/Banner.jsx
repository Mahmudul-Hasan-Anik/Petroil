import React from "react";

const Banner = () => {
  return (
    <section>
      <div style={{ background: "url(image/banner.png)" }}>
        <div className=" bg-darklight w-full h-full py-44">
          <div className="mx-auto max-w-6xl">
            <h1 className=" text-6xl text-white font-pop font-bold max-w-3xl">
              We exist since 1975 on the oil and gas industry.
            </h1>
            <button className="px-8 py-3 uppercase bg-bg-red-custom text-white mt-8 border border-red-600 hover:bg-transparent hover:border-white ease-linear duration-200">
              learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
