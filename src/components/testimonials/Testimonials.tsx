"use client";
import { RsetAddIndex, selectAddIndex } from "@/slices/navMenuSlice";
import { AppDispatch } from "@/store/store";
import { AnimatePresence, motion } from "motion/react";
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
      dispatch(RsetAddIndex(testimonialIndex+1));
      console.log(testimonialIndex)
    }, 6000);
    return () => clearInterval(id);
  }, [dispatch, testimonialIndex]);

  useEffect(() => {}, [testimonialIndex]);

  const loopTestimonials = [...testimonials, ...testimonials.slice(0, 3)];

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
        <span className="border-b-4 border-sky-600 pb-4">Tes</span>timonials
      </h1>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem.
      </p>

      <div className="overflow-hidden pt-16 pb-10">
        <motion.div
          className="flex"
          animate={{ x: `-${(testimonialIndex % 5) * (100 / 3)}%` }} // slide based on index
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {loopTestimonials.map((t, i) => (
            <div key={i} className="w-1/3 flex-shrink-0 text-center px-2">
              <p className="p-6 bg-white shadow-[0_10px_6px_rgba(0,0,0,0.25)] rounded-lg">
                <BiSolidQuoteAltLeft className="inline text-sky-500 text-2xl" />
                &nbsp;&nbsp;{t.text}&nbsp;&nbsp;
                <BiSolidQuoteAltRight className="inline text-sky-500 text-2xl" />
              </p>
              <img
                src={t.image}
                alt=""
                className="mx-auto w-1/3 rounded-full mt-6"
              />
              <h3 className="text-lg font-bold py-2">{t.name}</h3>
              <h4 className="text-[16px]">{t.job}</h4>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 pb-16">
        {testimonials.map((_, i) => (
          <div
            className={`w-3 h-3 border-1 border-sky-600 ${(i==testimonialIndex%5)?("bg-sky-600"):("bg-none")} rounded-full hover:cursor-pointer`}
            onClick={() => (dispatch(RsetAddIndex(i)))}
            key={i}
          ></div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
