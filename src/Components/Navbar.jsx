import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-bg-red-custom text-white h-20">
      <div className=" max-w-6xl m-auto flex justify-between py-4">
        <div className=" w-1/3">
          <picture>
            <img src="./image/logo.png" loading="lazy" />
          </picture>
        </div>
        <div className="w-2/3 flex items-center justify-end font-pop">
          <ul className=" flex justify-end gap-x-12 font-semibold">
            <li>
              <a
                href="#"
                className=" hover:text-black ease-linear duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-black ease-linear duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-black ease-linear duration-200"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-black ease-linear duration-200"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-black ease-linear duration-200"
              >
                blog
              </a>
            </li>
          </ul>
          <button className=" border-2 border-white px-8 py-3 uppercase ml-16">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
