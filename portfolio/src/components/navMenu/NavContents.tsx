import React from "react";
import { FiServer } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoImagesOutline } from "react-icons/io5";
import {
  LiaTelegramPlane,
  LiaLinkedin,
  LiaInstagram,
  LiaGithub,
  LiaWhatsapp,
} from "react-icons/lia";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

const NavContents = () => {
  return (
    <>
      <div id="myInfo" className="py-4 px-8 b-amber-400">
        <img
          src="me.jpeg"
          className="w-3/6 mx-auto border-gray-800 border-8 rounded-full"
          alt=""
        />
        <h1 className="text-white text-2xl font-semibold text-center w-fit my-4 mx-auto">
          Parsa Ghorbani
        </h1>
        <ul id="socials" className="flex justify-between text-white">
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="https://linkedin.com/in/parsagh">
              <LiaLinkedin />
            </a>
          </li>
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="">
              <LiaWhatsapp />
            </a>
          </li>
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="https://github.com/Parsa10Gh">
              <LiaGithub />
            </a>
          </li>
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="">
              <LiaInstagram />
            </a>
          </li>
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="">
              <LiaTelegramPlane />
            </a>
          </li>
        </ul>
      </div>
      <ul id="navMenu" className="py-8 px-6 text-lg">
        <li className="group w-full text-gray-400 pb-8 hover:cursor-pointer">
          <a href="#hero" className="flex items-center">
            <RiHome2Line className="group-hover:text-sky-500 mb-1 mr-4"></RiHome2Line>
            <span className="group-hover:text-white">Home</span>
          </a>
        </li>
        <li className="group w-full text-gray-400 pb-8 hover:cursor-pointer">
          <a href="#about" className="flex items-center">
            <MdOutlinePersonOutline className="group-hover:text-sky-500 mb-1 mr-4"></MdOutlinePersonOutline>
            <span className="group-hover:text-white">About</span>
          </a>
        </li>
        <li className="group w-full text-gray-400 pb-8 hover:cursor-pointer">
          <a href="#resume" className="flex items-center">
            <HiOutlineDocumentText className="group-hover:text-sky-500 mb-1 mr-4"></HiOutlineDocumentText>
            <span className="group-hover:text-white">Resume</span>
          </a>
        </li>
        <li className="group w-full text-gray-400 pb-8 hover:cursor-pointer">
          <a href="#portfolio" className="flex items-center">
            <IoImagesOutline className="group-hover:text-sky-500 mb-1 mr-4"></IoImagesOutline>
            <span className="group-hover:text-white">Portfolio</span>
          </a>
        </li>
        <li className="group w-full text-gray-400 pb-8 hover:cursor-pointer">
          <a href="#services" className="flex items-center">
            <FiServer className="group-hover:text-sky-500 mb-1 mr-4"></FiServer>
            <span className="group-hover:text-white">Services</span>
          </a>
        </li>
        <li className="group w-full text-gray-400 pb-8 hover:cursor-pointer">
          <a href="contact" className="flex items-center">
            <TfiEmail className="group-hover:text-sky-500 mb-1 mr-4" />
            <span className="group-hover:text-white">Contact</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavContents;
