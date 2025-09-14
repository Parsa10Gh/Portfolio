"use client";
import { motion } from "motion/react";
import React from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import emailjs from "@emailjs/browser";

const Contact = () => {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kehqn1m",
        "template_ad3b6mi",
        e.target as HTMLFormElement,
        "inhsunF_H15L4b-le"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.log("Email send error:", error.text);
        }
      );
  }
  return (
    <motion.div
      id="contact"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Con</span>tact
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dolorum.
      </p>
      <div className="lg:flex py-16 gap-8">
        <div className="lg:w-5/12 py-6 px-3 sm:px-8 shadow-[-2px_-1px_20px_rgba(0,0,0,0.25)]">
          <ul>
            <li className="flex py-5 gap-4">
              <div className="flex p-3 text-sky-600 h-fit bg-[#F4FAFD] rounded-full">
                <LuMapPin className="text-2xl " />
              </div>
              <div>
                <h5 className="text-lg font-bold">Address</h5>
                <p className="text-sm h-fit">A108 Adam Street, New York, NY 535022</p>
              </div>
            </li>
            <li className="flex py-5 gap-4">
              <div className="flex p-3 text-sky-600 bg-[#F4FAFD] rounded-full">
                <LuPhone className="text-2xl " />
              </div>
              <div>
                <h5 className="text-lg font-bold">Call me</h5>
                <p className="text-sm">+989*********</p>
              </div>
            </li>
            <li className="flex py-5 gap-4">
              <div className="flex p-3 text-sky-600 bg-[#F4FAFD] rounded-full">
                <LuMail className="text-2xl " />
              </div>
              <div>
                <h5 className="text-lg font-bold">Email me</h5>
                <p className="text-sm text-wrap">parsa.ghorbani11@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <form
          className="lg:w-7/12 py-6 px-3 sm:px-8 my-8 lg:my-0 shadow-[-2px_-1px_20px_rgba(0,0,0,0.25)]"
          onSubmit={sendEmail}
        >
          <div className="md:flex justify-between py-3">
            <div className="md:w-1/2 md:pr-4 py-3">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-4 border-1 border-gray-300 outline-0 p-3 focus:border-sky-500"
                required
              />
            </div>
            <div className="md:w-1/2 md:pl-4 py-3">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-4 border-1 border-gray-300 outline-0 p-3 focus:border-sky-500"
                required
              />
            </div>
          </div>
          <div className="flex-col py-3">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full mt-4 border-1 border-gray-300 outline-0 p-3 focus:border-sky-500"
            />
          </div>
          <div className="flex-col py-3">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="w-full mt-4 border-1 border-gray-300 outline-0 p-3 focus:border-sky-500"
              rows={10}
              required
            ></textarea>
          </div>
          <input
            type="submit"
            name="submit"
            value="Send Message"
            className="w-fit block mx-auto bg-sky-500 px-8 py-2 rounded-full text-white hover:cursor-pointer hover:bg-sky-300 transition duration-500"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
