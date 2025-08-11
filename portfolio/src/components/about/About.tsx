import React from "react";
import { RxCaretRight } from "react-icons/rx";

const About = () => {
  return (
    <div id="about-container" className="px-3 min-[480px]:px-14 sm:px-28 lg:px-10 ">
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Ab</span>out
      </h1>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="lg:flex py-16">
        <img src="MyPhoto2.jpeg" alt="" className="lg:w-1/3 h-fit md:pr-28 lg:pr-0" />
        <div className="lg:pl-6 pt-8">
          <h1 className="text-2xl font-semibold">Front-end Developer</h1>
          <p className="px-0 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="grid lg:grid-cols-2 gap-5 py-6 text-">
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">Birthday :</span>
                &nbsp;&nbsp;&nbsp;21 May 2003
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">Age :</span>
                &nbsp;&nbsp;&nbsp;22
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">Website :</span>
                &nbsp;&nbsp;&nbsp;www.portfolio.com
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">Degree :</span>
                &nbsp;&nbsp;&nbsp;Bachelor
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">Phone :</span>
                &nbsp;&nbsp;&nbsp;+989397815214
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">Email :</span>
                &nbsp;&nbsp;&nbsp;parsa.ghorbani11@gmail.com
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">City :</span>
                &nbsp;&nbsp;&nbsp;Tehran, Iran
              </p>
            </li>
            <li className="flex items-center">
              <RxCaretRight className="text-3xl text-sky-500 font-extralight" />
              <p className="h-full pt-0.5">
                <span className="font-bold">Freelance :</span>
                &nbsp;&nbsp;&nbsp;Available
              </p>
            </li>
          </ul>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
