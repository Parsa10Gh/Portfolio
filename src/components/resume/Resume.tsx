"use client";
import { motion } from "motion/react";
import React from "react";

const Resume = () => {
  return (
    <motion.div
      id="resume"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Res</span>ume
      </h1>
      <p>
        Self-taught frontend developer with expertise in React, Next.js,
        TypeScript, and Redux. Through personal and collaborative projects, I
        have gained solid experience in building modern, responsive, and
        user-friendly interfaces , delivering results comparable to experienced
        professionals. I am highly motivated, eager to learn new technologies,
        and thrive in team-oriented environments where I can contribute to both
        technical solutions and project success.
      </p>
      <div className="grid lg:grid-cols-2 gap-4 py-16">
        <div className="pr-4">
          <h1 className="text-2xl font-bold px-4 pb-6">Summery</h1>
          <div className="flex items-center relative py-2">
            <div className="h-4 w-4 border-2 border-[#119DDD] rounded-xl absolute left-[-7px] bottom-[-1.5px]"></div>
            <h2 className="pl-4 text-xl text-gray-600 font-semibold absolute">
              PARSA GHORBANI
            </h2>
          </div>
          <div className="pl-6 py-3 border-l-2 border-[#119DDD] text-justify">
            I was born and raised in Bandar-e Anzali, Gilan. I moved to Tehran
            when I was admitted to Iran University of Science and Technology,
            where I continued my education. During this time, I discovered my
            passion for front-end development. This interest motivated me to learn
            HTML, CSS, and JavaScript, and gradually explore frameworks like
            React and Next.js.
            <ul className="pt-4 list-disc pl-6">
              <li className="py-1">Narmak, Tehran, Iran</li>
              <li className="py-1">(+98)9397815214</li>
              <li className="py-1">parsa.ghorbani11@gmail.com</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold px-4 pb-6">Education</h1>
          <div className="flex items-center relative py-2">
            <div className="h-4 w-4 border-2 border-[#119DDD] rounded-xl  absolute left-[-7px] bottom-[-1.5px]"></div>
            <h2 className="pl-4 absolute text-xl text-gray-600 font-semibold">
              BACHELOR OF ELECTRICAL ENGINEERING
            </h2>
          </div>
          <div className="pl-6 py-3 border-l-2 border-[#119DDD]">
            <p className="px-4 py-2 block">2021-2025</p>
            <p className="py-1 italic">
              Iran University of Science and Technology, Tehran
            </p>
            <p className="py-2">
              I earned my Bachelor&apos;s degree in Electrical Engineering with
              a specialization in Control from Iran University of Science and
              Technology. I was admitted after achieving a rank of 621 in the
              national university entrance exam &#40;Konkur&#41;, Which is a
              highly competitive test that selects students for top universities
              across Iran.
            </p>
          </div>
        </div>
        <div className="pr-2">
          <h1 className="text-2xl font-bold px-4 pb-6">Education</h1>
          <div className="flex items-center relative py-2">
            <div className="h-4 w-4 border-2 border-[#119DDD] rounded-xl  absolute left-[-7px] bottom-[-1.5px]"></div>
            <h2 className="pl-4 absolute text-xl text-gray-600 font-semibold">
              MASTER OF ELECTRICAL ENGINEERING
            </h2>
          </div>
          <div className="pl-6 py-3 border-l-2 border-[#119DDD]">
            <p className="px-4 py-2 block">2025-Present</p>
            <p className="py-1 italic">
              Sharif University of Technology, Tehran
            </p>
            <p className="py-2">
              I Started my master at sharif unversity of technology. 
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold px-4 pb-6">
            Professional Experience
          </h1>
          <div className="flex items-center relative py-2">
            <div className="h-4 w-4 border-2 border-[#119DDD] rounded-xl absolute left-[-7px] bottom-[-1.5px]"></div>
            <h2 className="pl-4 text-xl text-gray-600 font-semibold absolute">
              JUNIOR FRONT-END DEVELOPER
            </h2>
          </div>
          <div className="pl-6 py-3 border-l-2 border-[#119DDD]">
            <p className="px-4 py-2 block">July–October 2024</p>
            <p className="py-1 italic">Gashtasp, Tehran</p>
            <p className="py-2">
              Gashtasp is a leading accelerator in the field of artificial
              intelligence. During my time there, I contributed to the
              development of modern, scalable, and user-focused web applications
              which was for showing the services they provide and present their
              services.
              <span className="block font-bold pt-2 pb-0.5">
                Key Achievements & Tasks:
              </span>
            </p>
            <ul className="list-disc px-4">
              <li className="py-1">
                Built responsive and user-friendly landing pages
              </li>
              <li className="py-1">
                Implemented UI/UX designs into functional interfaces
              </li>
              <li className="py-1">Developed Single Page Applications (SPA)</li>
              <li className="py-1">
                Integrated APIs for dynamic data handling
              </li>
              <li className="py-1">
                Optimized application performance for speed and efficiency
              </li>
              <li className="py-1">
                Contributed to the development of Software as a Service (SaaS)
                solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
