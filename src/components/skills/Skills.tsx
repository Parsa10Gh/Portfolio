"use client";

import { motion } from "motion/react";
import React from "react";

interface MySkillsType {
  HTML: number;
  CSS: number;
  JAVASCRIPT: number;
  REACT: number;
  NEXT: number;
  TYPESCRIPT: number;
  REDUX: number;
  TAILWIND: number;
}

const mySkills: MySkillsType = {
  HTML: 100,
  CSS: 90,
  JAVASCRIPT: 80,
  REACT: 100,
  NEXT: 100,
  TYPESCRIPT: 75,
  REDUX: 90,
  TAILWIND: 100,
};

const Skills = () => {
  return (
    <motion.div
    id="skills"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10 py-8 bg-[#F4FAFD]"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Ski</span>lls
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        deserunts.
      </p>
      <div className="py-20 grid md:grid-cols-2 gap-8 text-xs font-medium">
        {Object.entries(mySkills).map(([skill, percentage]) => (
          <div key={skill} className="">
            <div className="flex justify-between py-2">
              <p>{skill}</p>
              <p>{percentage}%</p>
            </div>
            <div className="w-full h-2.5 relative bg-gray-200">
              <motion.div
                className="bg-sky-600 absolute h-full"
                style={{ width: `${percentage}%` }}
                initial={{width:0}}
                whileInView={{width:`${percentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
