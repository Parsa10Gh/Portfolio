"use client";

import React from "react";
import { motion } from "motion/react";
import { RxCaretRight } from "react-icons/rx";

const About = () => {
  return (
    <motion.div
      id="about"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Ab</span>out
      </h1>
      <p>
        I am a self-taught frontend developer with a passion for creating
        modern, responsive, and user-friendly web applications. I specialize in
        React, Next.js, TypeScript, and Redux, and enjoy turning ideas into
        functional, elegant interfaces.
      </p>
      <div className="lg:flex py-16">
        <img
          src="MyPhoto2.jpeg"
          alt=""
          className="sm:w-2/3 lg:w-1/3 h-fit rounded-2xl "
        />
        <div className="lg:pl-6 pt-8 lg:pt-0">
          <h2 className="text-2xl font-semibold">Front-end Developer</h2>
          <p className="px-0 py-4">
            As a frontend developer, I have experience working on personal and
            collaborative projects that deliver high-quality web applications. I
            am motivated to learn new technologies and thrive in team-oriented
            environments where I can contribute to technical solutions and
            project success.
          </p>
          <ul className="grid lg:grid-cols-2 gap-5 py-6 text-">
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong>Birthday :</strong>
                &nbsp;&nbsp;&nbsp;21 May 2003
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong>Age :</strong>
                &nbsp;&nbsp;&nbsp;22
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong>Website :</strong>
                &nbsp;&nbsp;&nbsp;www.portfolio.com
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong className="font-bold">Degree :</strong>
                &nbsp;&nbsp;&nbsp;Bachelor
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong>Phone :</strong>
                &nbsp;&nbsp;&nbsp;+989397815214
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong>Email :</strong>
                &nbsp;&nbsp;&nbsp;parsa.ghorbani11@gmail.com
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong>City :</strong>
                &nbsp;&nbsp;&nbsp;Tehran, Iran
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <strong>Freelance :</strong>
                &nbsp;&nbsp;&nbsp;Available
              </p>
            </li>
          </ul>
          <p>
            I am committed to continuous learning and improving my skills to
            stay up-to-date with the latest web technologies. I enjoy solving
            complex problems, optimizing performance, and ensuring the best user
            experience in every project I work on.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
