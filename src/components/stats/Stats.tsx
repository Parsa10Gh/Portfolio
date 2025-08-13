"use client"

import React from "react";
import { motion } from "motion/react";
import { LuCodeXml, LuNotebookText, LuSmile } from "react-icons/lu";
import { PiBuildingOffice } from "react-icons/pi";
import AnimatedCounter from "../animatedCounter/AnimatedCounter";

const Stats = () => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-y-20 md:gap-8 lg:grid-cols-4 px-3 min-[480px]:px-14 sm:px-36 xl:px-14 pt-16 pb-20"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-start">
        <LuSmile className="text-5xl text-sky-600 h-fit py-1" />
        <div className="pl-4">
          <h1 className="text-5xl font-bold pb-2">
            <AnimatedCounter from={0} to={1} />
          </h1>
          <p className="font-light text-gray-500">
            <strong className="font-semibold">Happy Clients</strong> Lorem ipsum
            dolor consectetur.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <LuNotebookText className="text-5xl text-sky-600 h-fit py-1" />
        <div className="pl-4">
          <h1 className="text-5xl font-bold pb-2">
            <AnimatedCounter from={0} to={5} />
          </h1>
          <p className="font-light text-gray-500">
            <strong className="font-semibold">Projects</strong> Lorem ipsum
            dolor consectetur.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <LuCodeXml className="text-5xl text-sky-600 h-fit py-1" />
        <div className="pl-4">
          <h1 className="text-5xl font-bold pb-2">
            <AnimatedCounter from={0} to={1421} />
          </h1>
          <p className="font-light text-gray-500">
            <strong className="font-semibold">Hours Of Coding</strong> Lorem
            ipsum dolor consectetur.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <PiBuildingOffice className="text-5xl text-sky-600 h-fit py-1" />
        <div className="pl-4">
          <h1 className="text-5xl font-bold pb-2">
            <AnimatedCounter from={0} to={1} />
          </h1>
          <p className="font-light text-gray-500">
            <strong className="font-semibold">Companies</strong> that i worked
            with in my career
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
