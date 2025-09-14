"use client";
import { motion } from "motion/react";
import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { FaCogs } from "react-icons/fa";
import { LuAppWindow, LuBug } from "react-icons/lu";
import { PiDevices, PiFigmaLogo } from "react-icons/pi";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Ser</span>vices
      </h1>
      <p>
        I offer a range of frontend development services to help bring ideas to
        life on the web. This includes building responsive and modern websites,
        developing dynamic single-page applications, integrating APIs to fetch
        and display data, implementing clean and user-friendly UI/UX designs,
        and optimizing performance to ensure fast and smooth experiences across
        all devices and browsers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        <div className="flex items-start justify-center group">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white group-hover:bg-white group-hover:text-sky-600 border-1 border-sky-600 duration-400">
            <PiDevices />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold group-hover:text-sky-600 duration-400">
              Building Responsive Websites
            </h4>
            <p className="py-3 text-sm text-gray-900">
              Creating websites that are accessible and function seamlessly
              across various devices and screen sizes (desktops, tablets, and
              mobile phones).
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center group">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white group-hover:bg-white group-hover:text-sky-600 border-1 border-sky-600 duration-400">
            <LuAppWindow />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold group-hover:text-sky-600 duration-400">
              Single Page Application Development
            </h4>
            <p className="py-3 text-sm text-gray-900">
              Building dynamic, interactive web applications where content
              updates without full page reloads, providing a smoother user
              experience
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center group">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white group-hover:bg-white group-hover:text-sky-600 border-1 border-sky-600 duration-400">
            <PiFigmaLogo />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold group-hover:text-sky-600 duration-400">
              UI/UX Design Implementation
            </h4>
            <p className="py-3 text-sm text-gray-900">
              Translating design mockups and wireframes into functional user
              interfaces, considering usability and aesthetics.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center group">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white group-hover:bg-white group-hover:text-sky-600 border-1 border-sky-600 duration-400">
            <AiOutlineApi />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold group-hover:text-sky-600 duration-400">
              API Integration
            </h4>
            <p className="py-3 text-sm text-gray-900">
              Connecting front-end interfaces with backend services and APIs to
              fetch and display data.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center group">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white group-hover:bg-white group-hover:text-sky-600 border-1 border-sky-600 duration-400">
            <LuBug />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold group-hover:text-sky-600 duration-400">
              Testing and Debugging
            </h4>
            <p className="py-3 text-sm text-gray-900">
              Identifying and fixing bugs, ensuring websites and applications
              function correctly across different browsers and devices.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center group">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white group-hover:bg-white group-hover:text-sky-600 border-1 border-sky-600 duration-400">
            <FaCogs />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold group-hover:text-sky-600 duration-400">
              Performance Optimization
            </h4>
            <p className="py-3 text-sm text-gray-900">
              Improving website loading times and overall performance through
              techniques like code optimization, image compression, and caching.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
