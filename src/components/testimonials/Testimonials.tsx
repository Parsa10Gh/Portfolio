import React from "react";
import MySlider from "./MySlider";

const Testimonials = () => {
  return (
    <div
      className="px-3 min-[480px]:px-14 md:px-20 lg:px-10 bg-[#F4FAFD]"
      id="testimonials"
    >
      <h1 className="py-12 text-3xl font-bold">
        <span className="border-b-4 border-sky-600 pb-4">Tes</span>timonials
      </h1>
      <p>
        This section is currently under development. The following testimonials
        are placeholders and will be updated with real feedback from clients and
        collaborators soon.
      </p>
      <div className="py-16">
        <MySlider />
      </div>
    </div>
  );
};

export default Testimonials;
