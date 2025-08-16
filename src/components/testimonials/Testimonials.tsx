"use client";
import { RsetAddIndex, selectAddIndex } from "@/slices/navMenuSlice";
import { AppDispatch } from "@/store/store";
import { motion } from "motion/react";
import React, { useEffect } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Testimonials = () => {
  interface testimonials {
    name: string;
    job: string;
    image: string;
    text: string;
  }

  const testimonials: testimonials[] = [
    {
      name: "Matt Brandon",
      job: "Designer",
      image: "testimonials-1.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam praesentium repudiandae in excepturi enim, minus aliquam temporibus expedita quia sit",
    },
    {
      name: "Sara Willson",
      job: "Entreperneur",
      image: "testimonials-2.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam praesentium repudiandae in excepturi enim, minus aliquam temporibus expedita quia sit",
    },
    {
      name: "Jena Karlis",
      job: "Store Owner",
      image: "testimonials-3.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam praesentium repudiandae in excepturi enim, minus aliquam temporibus expedita quia sit",
    },
    {
      name: "John Larson",
      job: "Freelancer",
      image: "testimonials-4.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam praesentium repudiandae in excepturi enim, minus aliquam temporibus expedita quia sit",
    },
    {
      name: "Saul Goodman",
      job: "CEO & Founder",
      image: "testimonials-5.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam praesentium repudiandae in excepturi enim, minus aliquam temporibus expedita quia sit",
    },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const testimonialIndex = useSelector(selectAddIndex);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(RsetAddIndex());
    }, 3000);
    return () => clearInterval(id);
  }, [dispatch]);

  // 2) Observe (log) the fresh value whenever it changes
  useEffect(() => {
    console.log("testimonialIndex:", testimonialIndex);
        console.log(visible);

  }, [testimonialIndex]);

  // Optional: pick 3 visible items (wrap-around)
  const n = testimonials.length;
  const visible = [
    testimonials[testimonialIndex % n],
    testimonials[(testimonialIndex + 1) % n],
    testimonials[(testimonialIndex + 2) % n],
  ];

  return (
    <motion.div
      id="testimonials"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10 bg-[#F4FAFD]"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Tes</span>monials
      </h1>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-1 gap-6 pt-16 pb-10 px-4">
        <div className="text-center">
          <p className="p-6 bg-white shadow-2xl rounded-lg">
            <BiSolidQuoteAltLeft className="inline text-sky-500 text-2xl" />
            &nbsp;&nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nam praesentium repudiandae in excepturi enim, minus aliquam
            temporibus expedita quia sit.&nbsp;&nbsp;
            <BiSolidQuoteAltRight className="inline text-sky-500 text-2xl" />
          </p>
          <img
            src="testimonials-4.jpg"
            alt=""
            className="mx-auto w-1/3 rounded-full mt-6"
          />
          <h3 className="text-lg font-bold py-2">Matt Brandon</h3>
          <h4 className="text-[16px]">Freelancer</h4>
        </div>
        <div className="text-center">
          <p className="p-6 bg-white shadow-2xl rounded-lg">
            <BiSolidQuoteAltLeft className="inline text-sky-500 text-2xl" />
            &nbsp;&nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nam praesentium repudiandae in excepturi enim, minus aliquam
            temporibus expedita quia sit.&nbsp;&nbsp;
            <BiSolidQuoteAltRight className="inline text-sky-500 text-2xl" />
          </p>
          <img
            src="testimonials-4.jpg"
            alt=""
            className="mx-auto w-1/3 rounded-full mt-6"
          />
          <h3 className="text-lg font-bold py-2">Matt Brandon</h3>
          <h4 className="text-[16px]">Freelancer</h4>
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-16">
        <div className="w-3 h-3 bg-none border-1 border-sky-600 rounded-full"></div>
        <div className="w-3 h-3 bg-none border-1 border-sky-600 rounded-full"></div>
        <div className="w-3 h-3 bg-none border-1 border-sky-600 rounded-full"></div>
        <div className="w-3 h-3 bg-none border-1 border-sky-600 rounded-full"></div>
        <div className="w-3 h-3 bg-none border-1 border-sky-600 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
