import React from "react";

const Service = () => {
  return (
    <section>
      <div class="grid grid-cols-2">
        <div className=" m-auto h-80 flex justify-center flex-col">
          <h1 className=" text-6xl font-bold font-pop">Our Services</h1>
          <p className=" w-96 font-pop text-base font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          style={{ background: "url(image/service_one.png)" }}
          className=" h-80"
        >
          <div className="bg-darklight w-full h-full flex items-center">
            <div className=" w-[540px] m-auto">
              <h1 className=" font-pop font-bold text-3xl text-white">
                Modern natural oil and gas refineries.
              </h1>
              <button className="px-8 py-3 uppercase bg-bg-red-custom text-white mt-8 border border-red-600 hover:bg-transparent hover:border-white ease-linear duration-200">
                learn more
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ background: "url(image/service_two.png)" }}
          className=" h-80"
        >
          <div className="bg-darklight w-full h-full flex items-center">
            <div className=" w-[540px] m-auto">
              <h1 className=" font-pop font-bold text-3xl text-white">
                Supply of national industries.
              </h1>
              <button className="px-8 py-3 uppercase bg-bg-red-custom text-white mt-8 border border-red-600 hover:bg-transparent hover:border-white ease-linear duration-200">
                learn more
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ background: "url(image/service_three.png)" }}
          className=" h-80"
        >
          <div className="bg-darklight w-full h-full flex items-center">
            <div className=" w-[540px] m-auto">
              <h1 className=" font-pop font-bold text-3xl text-white">
                National fuel distribution and supply.
              </h1>
              <button className="px-8 py-3 uppercase bg-bg-red-custom text-white mt-8 border border-red-600 hover:bg-transparent hover:border-white ease-linear duration-200">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
