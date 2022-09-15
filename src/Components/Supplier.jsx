import React from "react";

const Supplier = () => {
  return (
    <section>
      <div className=" flex max-w-6xl m-auto font-pop my-16">
        <div className=" w-1/3">
          <h1 className=" text-5xl font-bold w-72 leading-[72px]">
            The biggest supplier on the country
          </h1>
        </div>
        <div className=" w-2/3 flex items-center">
          <p className=" w-[550px] items-center font-medium text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
      </div>

      <div className=" flex justify-between mb-5">
        <picture>
          <img
            src="./image/suppli_one.png"
            loading="lazy"
            className=" w-[320px]"
          />
        </picture>
        <picture>
          <img
            src="./image/suppli_two.png"
            loading="lazy"
            className=" w-[320px]"
          />
        </picture>
        <picture>
          <img
            src="./image/suppli_three.png"
            loading="lazy"
            className=" w-[320px]"
          />
        </picture>
        <picture>
          <img
            src="./image/suppli_four.png"
            loading="lazy"
            className=" w-[320px]"
          />
        </picture>
      </div>
    </section>
  );
};

export default Supplier;
