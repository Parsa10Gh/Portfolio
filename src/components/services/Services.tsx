"use client";
import { motion } from "motion/react";
import React from "react";
import { LuBug } from "react-icons/lu";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Ser</span>vices
      </h1>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        <div className="flex items-start justify-center">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white">
            <LuBug />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold">Lorem ipsum</h4>
            <p className="py-3 text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste repellat aperiam cumque! Iste explicabo, ex consequuntur aut.</p>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white">
            <LuBug />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold">Lorem ipsum</h4>
            <p className="py-3 text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste repellat aperiam cumque! Iste explicabo, ex consequuntur aut.</p>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white">
            <LuBug />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold">Lorem ipsum</h4>
            <p className="py-3 text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste repellat aperiam cumque! Iste explicabo, ex consequuntur aut.</p>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white">
            <LuBug />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold">Lorem ipsum</h4>
            <p className="py-3 text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste repellat aperiam cumque! Iste explicabo, ex consequuntur aut.</p>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white">
            <LuBug />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold">Lorem ipsum</h4>
            <p className="py-3 text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste repellat aperiam cumque! Iste explicabo, ex consequuntur aut.</p>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <div className="p-4 rounded-full bg-sky-600 text-2xl text-white">
            <LuBug />
          </div>
          <div className="px-5">
            <h4 className="text-xl font-semibold">Lorem ipsum</h4>
            <p className="py-3 text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste repellat aperiam cumque! Iste explicabo, ex consequuntur aut.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
