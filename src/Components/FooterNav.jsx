import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";

const FooterNav = () => {
  return (
    <section>
      <div className=" bg-black h-96">
        <div className="flex max-w-6xl m-auto py-24 justify-between">
          <div className="font-pop text-white ">
            <picture>
              <img src="./image/footerlogo.png" loading="lazy" />
            </picture>
            <ul className=" pt-6 leading-8 text-sm">
              <li>
                <a href="#" className="text-white flex">
                  <FiMail className="mr-4 mt-2" /> mail@yourcompany.com
                </a>
              </li>
              <li>
                <a href="#" className="text-white flex mr-4 mt-1">
                  <FiPhoneCall className="mr-4 mt-2" /> +896 120 5889 (Toll
                  free)
                </a>
              </li>
              <li>
                <a href="#" className="text-white flex">
                  <FaLocationArrow className=" text-white mr-4 mt-2" /> 101
                  Baker Street, New York, USA, 12345
                </a>
              </li>
            </ul>

            <div className=" flex w-32 justify-between mt-5">
              <div className=" bg-bg-red-custom p-2 rounded-3xl mr-2">
                <a href="#">
                  <FaFacebookF />
                </a>
              </div>
              <div className=" bg-bg-red-custom p-2 rounded-3xl mr-2">
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
              <div className=" bg-bg-red-custom p-2 rounded-3xl mr-2">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className=" bg-bg-red-custom p-2 rounded-3xl">
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="font-pop text-white flex flex-col justify-center">
            <h1 className="mb-3 text-base font-bold">Company</h1>
            <ul className=" leading-8 text-sm">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>

          <div className="font-pop text-white  flex justify-center flex-col">
            <h1 className="mb-3 text-base font-bold">Others</h1>
            <ul className=" leading-8 text-sm">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="font-pop text-white  flex justify-center flex-col">
            <h1 className="text-base font-bold">Certificate</h1>

            <div className="flex pt-5">
              <picture>
                <img src="./image/Cert1.png" loading="lazy" className="mr-3" />
              </picture>
              <picture>
                <img src="./image/Cert2.png" loading="lazy" className="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNav;
