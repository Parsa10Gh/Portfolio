"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { BsLink45Deg, BsX, BsZoomIn } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RsetActiveProduct, RsetToggleModal, selectActiveProduct, selectToggleModal } from "@/slices/portfolioSlices";
import { AppDispatch } from "@/store/store";
import Link from "next/link";

const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector(selectToggleModal);
  const activeProduct = useSelector(selectActiveProduct)

  const openModal = (product: Products) => {
    dispatch(RsetActiveProduct(product)) ;
  };

  interface Products {
    title: string;
    subtitle: string;
    image: string;
  }

  const products: Products[] = [
    {
      title: "Book",
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      image: "books-1.jpg",
    },
    {
      title: "App",
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      image: "app-1.jpg",
    },
    {
      title: "App",
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      image: "app-1.jpg",
    },
    {
      title: "App",
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      image: "app-1.jpg",
    },
    {
      title: "App",
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      image: "app-1.jpg",
    },
    {
      title: "App",
      subtitle: "Lorem ipsum dolor sit amet consectetur",
      image: "books-1.jpg",
    },
  ];

  return (
    <>
      <motion.div
        id="portfolio"
        className="px-2 min-[480px]:px-14 md:px-20 lg:px-10 bg-[#F4FAFD]"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h1 className="py-12 text-3xl font-bold">
          <span className="border-b-4 border-sky-600 pb-4">Por</span>tfolio
        </h1>
        <p>
          Some of the projects I&apos;ve built, showcasing my work with React, Next.js, TypeScript, and other technologies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {products.map((product,index) => (
              <div className="relative group overflow-hidden bg-black h-fit" key={index}>
                <img
                  src={product.image}
                  alt=""
                  className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-50"
                />

                <h4 className="absolute bg-sky-700 text-white rounded-lg left-4 top-4 px-3 py-1 font-[sans-serif] font-extralight text-sm hidden group-hover:block">
                  {product.title}
                </h4>

                <p className="absolute text-white font-bold w-full text-center bottom-6 font-[sans-serif] hidden group-hover:block">
                  {product.subtitle}
                </p>

                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 text-white text-3xl font-bold font-[sans-serif] hidden group-hover:flex pointer-events-none">
                  <Link href="/portfolio-details" onClick={() => {openModal(product)
                    console.log(product)
                  }}>
                    <BsLink45Deg className="pointer-events-auto hover:cursor-pointer hover:text-sky-600" />
                  </Link>
                  <BsZoomIn
                    className="pointer-events-auto hover:cursor-pointer hover:text-sky-600"
                    onClick={() => {
                      dispatch(RsetToggleModal(isModalOpen));
                      openModal(product);
                    }}
                  />
                </p>
              </div>
          ))}
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div
              className="absolute inset-0 bg-black opacity-85"
              onClick={() => dispatch(RsetToggleModal(isModalOpen))}
            >
              <button
                className="absolute top-4 right-4 flex items-center justify-center text-white text-3xl hover:text-sky-600 hover:cursor-pointer"
                onClick={() => dispatch(RsetToggleModal(isModalOpen))}
              >
                <BsX />
              </button>
            </div>
            <div className="relative p-2 md:p-10 z-10">
              <motion.img
                src={activeProduct.image}
                alt=""
                className="md:w-11/12 mx-auto rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
