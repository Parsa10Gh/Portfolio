import React from "react";
import { IconType } from "react-icons";
import { FiServer } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoImagesOutline } from "react-icons/io5";
import {
  LiaTelegramPlane,
  LiaLinkedin,
  LiaGithub,
  LiaWhatsapp,
} from "react-icons/lia";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { TbDeviceDesktopCode, TbWorldWww } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { BsChatLeftQuote } from "react-icons/bs";

const NavContents = () => {
  interface ContentsType {
    title: string;
    icon: IconType;
    link: string;
  }

  const contents: ContentsType[] = [
    {
      title: "Home",
      icon: RiHome2Line,
      link: "hero",
    },
    {
      title: "About",
      icon: MdOutlinePersonOutline,
      link: "about",
    },
    {
      title: "Skills",
      icon: TbDeviceDesktopCode,
      link: "skills",
    },
    {
      title: "Resume",
      icon: HiOutlineDocumentText,
      link: "resume",
    },
    {
      title: "Projects",
      icon: IoImagesOutline,
      link: "portfolio",
    },
    {
      title: "Services",
      icon: FiServer,
      link: "services",
    },
    {
      title: "Testimonials",
      icon: BsChatLeftQuote,
      link: "testimonials",
    },
    {
      title: "Contact",
      icon: TfiEmail,
      link: "contact",
    },
  ];

  return (
    <>
      <div id="myInfo" className="py-4 px-8">
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
            <a href="https://wa.me/989397815214">
              <LiaWhatsapp />
            </a>
          </li>
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="https://github.com/Parsa10Gh">
              <LiaGithub />
            </a>
          </li>
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="https://portfolio-parsa-ghorbani.vercel.app">
              <TbWorldWww />
            </a>
          </li>
          <li className="bg-[#1D232B] p-2 text-2xl rounded-full">
            <a href="https://t.me/TheParsaGh">
              <LiaTelegramPlane />
            </a>
          </li>
        </ul>
      </div>
      <ul id="navMenu" className="py-8 px-6 text-lg">
        {contents.map((content, i) => (
          <li
            key={i}
            className="group w-full text-gray-400 hover:cursor-pointer"
          >
            <a href={`#${content.link}`} className="flex items-center py-4">
              <content.icon className="group-hover:text-sky-500 mb-1 mr-4" />
              <span className="group-hover:text-white">{content.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavContents;
