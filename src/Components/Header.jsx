import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-800 h-auto text-white py-2 border-b-2 font-pop border-yellow-500">
      <div className=" max-w-6xl mx-auto flex justify-between">
        <div className="flex justify-between ">
          <div className="flex border-r-2 border-slate-600">
            <FiMail className=" my-1" />
            <span className=" pl-2 pr-6">mail@yourcompany.com</span>
          </div>

          <div className="flex pl-6">
            <FiPhoneCall className=" my-1" />
            <span className=" pl-2">+896 120 5889 (Toll free)</span>
          </div>
        </div>
        <div className="flex justify-between w-32 pt-1">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
    </header>
  );
};

export default Header;
