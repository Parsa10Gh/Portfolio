"use client";

import NavContents from "./NavContents";
import React, { useEffect } from "react";
import { AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { RsetToggleNav, selectToggleNav } from "@/slices/navMenuSlice";
import { FaListUl } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const NavMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isNavOpen = useSelector(selectToggleNav);

  return (
    <>
      <button
        className="fixed top-5 right-2 sm:right-5 xl:hidden  bg-sky-600 text-white text-sm rounded-full z-30 p-4 hover:cursor-pointer"
        onClick={() => dispatch(RsetToggleNav(isNavOpen))}
      >
        {isNavOpen? <FaX /> : <FaListUl />}
      </button>
      {isNavOpen ? (
        <div
          id="navSidebar"
          className="bg-[#040B14] fixed left-0 top-0 h-full w-[300px] z-20 overflow-auto font-(family-name:poppins)"
        >
          <NavContents />
        </div>
      ) : (
        <div
          id="navSidebar"
          className="bg-[#040B14] hidden fixed xl:block left-0 h-full w-[300px] z-20 font-(family-name:poppins)"
        >
          <NavContents />
        </div>
      )}
    </>
  );
};

export default NavMenu;
