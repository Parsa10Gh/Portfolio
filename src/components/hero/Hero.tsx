"use client"

import React from "react";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="h-screen relative flex"
      initial={{ }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        id="hero_Background"
        src="image.jpg"
        alt=""
        className="absolute brightness-70 h-full w-full object-cover"
      />
      <div id="hero_text" className="z-20 h-fit my-auto text-white px-8">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold py-6">
          Parsa Ghorbani
        </h1>
        <div className="w-fit text-xl md:text-2xl xl:text-3xl flex ">
          <p className="pr-2">I'm</p>
          <span className="border-b-2 border-sky-600 pb-1">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-End Developer")
                  .callFunction(() => {})
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {})
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
