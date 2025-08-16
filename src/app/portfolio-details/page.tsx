"use client";
import { selectActiveProduct } from "@/slices/portfolioSlices";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const activeProduct = useSelector(selectActiveProduct);
  return (
    <div>
      {activeProduct.title}
      <img src={activeProduct.image} alt="" />
    </div>
  );
};

export default page;
