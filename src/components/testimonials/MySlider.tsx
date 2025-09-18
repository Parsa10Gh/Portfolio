"use client";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MySlider() {
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
  return (
    <Splide
      options={{
        type: "loop", // loop infinitely
        perPage: 3, // always show 3 slides
        perMove: 1, // move only 1 slide each time
        autoplay: true,
        interval: 6000, // 3 seconds
        arrows: false, // hide arrows
        pagination: false, // hide dots
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 800, // slide transition speed (ms)
        gap: "1rem", // spacing between slides
        breakpoints: {
            1024: { perPage:1}  //responsiveness
        }
      }}
      aria-label="Autoplay Testimonial Slider"
    >
      {testimonials.map((t, i) => (
        <SplideSlide key={i} className="w-full px-4 text-center">
          <p className="p-6 bg-white shadow-[0_10px_6px_rgba(0,0,0,0.25)] rounded-lg">
            <BiSolidQuoteAltLeft className="inline text-sky-500 text-2xl" />
            &nbsp;&nbsp;{t.text}
            &nbsp;&nbsp;
            <BiSolidQuoteAltRight className="inline text-sky-500 text-2xl" />
          </p>
          <img
            src={t.image}
            alt={t.name}
            className="mx-auto w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/4 rounded-full mt-6"
          />
          <h3 className="text-lg font-bold py-2">{t.name}</h3>
          <h4 className="text-[16px]">{t.job}</h4>
        </SplideSlide>
      ))}
    </Splide>
  );
}
