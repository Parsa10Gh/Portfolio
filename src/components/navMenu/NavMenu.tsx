"use client";

import NavContents from "./NavContents";
import React from "react";
import { AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { RsetToggleNav, selectToggleNav } from "@/slices/navMenuSlice";
import { FaListUl } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const NavMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isNavOpen = useSelector(selectToggleNav);

  return (
    <>
      {/* Toggle Button for mobile/tablet */}
      <button
        className="fixed top-5 right-2 sm:right-5 xl:hidden bg-sky-600 text-white text-sm rounded-full z-40 p-4 hover:cursor-pointer"
        onClick={() => dispatch(RsetToggleNav(isNavOpen))}
      >
        {isNavOpen ? <FaX /> : <FaListUl />}
      </button>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            key="mobile-sidebar"
            className="bg-[#040B14] fixed left-0 top-0 h-full w-[300px] z-30 overflow-auto font-(family-name:poppins) xl:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.7 }}
          >
            <NavContents />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="bg-[#040B14] hidden xl:block fixed left-0 top-0 h-full w-[300px] z-30 font-(family-name:poppins)"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.7 }}
      >
        <NavContents />
      </motion.div>
    </>
  );
};

export default NavMenu;
