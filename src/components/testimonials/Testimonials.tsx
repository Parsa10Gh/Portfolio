"use client";
import { RsetAddIndex, selectAddIndex } from "@/slices/navMenuSlice";
import { AppDispatch } from "@/store/store";
import { motion } from "motion/react";
import React, { useEffect } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Testimonials = () => {
  const dispatch = useDispatch<AppDispatch>();
  const testimonialIndex = useSelector(selectAddIndex);
  interface Testimonials {
    name: string;
    job: string;
    image: string;
    text: string;
  }

  const testimonials: Testimonials[] = [
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

  const pose: number[] = [
    0,
    -33.3,
    -33.3 * 2,
    -33.3 * 3,
    -33.3 * 4,
    -33.3 * 3,
    -33.3 * 2,
    -33.3,
    0,
  ];
  const loopTestimonials = [...testimonials, ...testimonials.slice(0, 2)];

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(RsetAddIndex(testimonialIndex + 1));
      console.log(testimonials[testimonialIndex % 5].name);
    }, 6000);
    return () => clearInterval(id);
  }, [testimonialIndex]);

  return (
    <motion.div
      id="testimonials"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10 bg-[#F4FAFD]"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="overflow-hidden">
        <h1 className="py-12 text-3xl font-bold">
          <span className="border-b-4 border-sky-600 pb-4">Tes</span>timonials
        </h1>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem.
        </p>
       
        {/* less than lg width */}
        <motion.div
          className="flex lg:hidden pt-16 pb-10"
          animate={{ x: `${pose[testimonialIndex % 9]*3}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {loopTestimonials.map((t, i) => (
            <motion.div
              className="w-full lg:w-1/3 shrink-0 px-2 md:px-4 text-center"
              key={i}
            >
              <p className="p-6 bg-white shadow-[0_10px_6px_rgba(0,0,0,0.25)] rounded-lg">
                <BiSolidQuoteAltLeft className="inline text-sky-500 text-2xl" />
                &nbsp;&nbsp;{t.text}
                &nbsp;&nbsp;
                <BiSolidQuoteAltRight className="inline text-sky-500 text-2xl" />
              </p>
              <img
                src={t.image}
                alt=""
                className="mx-auto w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/4 rounded-full mt-6"
              />
              <h3 className="text-lg font-bold py-2">{t.name}</h3>
              <h4 className="text-[16px]">{t.job}</h4>
            </motion.div>
          ))}
        </motion.div>

        {/* more than lg width */}
        <motion.div
          className="hidden lg:flex pt-16 pb-10"
          animate={{ x: `${pose[testimonialIndex % 9]}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {loopTestimonials.map((t, i) => (
            <motion.div
              className="w-full lg:w-1/3 shrink-0 px-4 text-center"
              key={i}
            >
              <p className="p-6 bg-white shadow-[0_10px_6px_rgba(0,0,0,0.25)] rounded-lg">
                <BiSolidQuoteAltLeft className="inline text-sky-500 text-2xl" />
                &nbsp;&nbsp;{t.text}
                &nbsp;&nbsp;
                <BiSolidQuoteAltRight className="inline text-sky-500 text-2xl" />
              </p>
              <img
                src={t.image}
                alt=""
                className="mx-auto w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/4 rounded-full mt-6"
              />
              <h3 className="text-lg font-bold py-2">{t.name}</h3>
              <h4 className="text-[16px]">{t.job}</h4>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-2 pb-16">
          {testimonials.map((_, i) => (
            <div
              className={`w-3 h-3 border-1 border-sky-600 ${
                i * -33.3 == pose[testimonialIndex % 9]
                  ? "bg-sky-600"
                  : "bg-none"
              } rounded-full hover:cursor-pointer`}
              onClick={() => dispatch(RsetAddIndex(i))}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
