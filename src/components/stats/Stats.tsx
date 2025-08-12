import React from "react";
import { LuCodeXml, LuNotebookText, LuSmile } from "react-icons/lu";
import { PiBuildingOffice } from "react-icons/pi";
import AnimatedCounter from "../animatedCounter/AnimatedCounter";

const Stats = () => {
  return (
    <div className="grid md:grid-cols-2 gap-y-20 md:gap-8 lg:grid-cols-4 px-3 min-[480px]:px-14 sm:px-36 xl:p-14">
      <div className="flex items-start shrink-0">
        <LuSmile className="text-5xl text-sky-600 h-fit py-1"/>
        <div className="pl-4">
          <h1 className="text-5xl lg:text-6xl font-semibold pb-2"><AnimatedCounter from={0} to={1} /></h1>
          <p className="font-light">
            <strong>Happy Clients</strong> Lorem ipsum dolor consectetur.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <LuNotebookText className="text-5xl text-sky-600 h-fit py-1"/>
        <div className="pl-4">
          <h1 className="text-5xl lg:text-6xl font-semibold pb-2"><AnimatedCounter from={0} to={5} /></h1>
          <p className="font-light">
            <strong>Projects</strong> Lorem ipsum dolor consectetur.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <LuCodeXml className="text-5xl text-sky-600 h-fit py-1"/>
        <div className="pl-4">
          <h1 className="text-5xl lg:text-6xl font-semibold pb-2"><AnimatedCounter from={0} to={1421} /></h1>
          <p className="font-light">
            <strong>Hours Of Coding</strong> Lorem ipsum dolor consectetur.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <PiBuildingOffice className="text-5xl text-sky-600 h-fit py-1"/>
        <div className="pl-4">
          <h1 className="text-5xl lg:text-6xl font-semibold pb-2"><AnimatedCounter from={0} to={1} /></h1>
          <p className="font-light">
            <strong>Companies</strong> that i worked with in my career
          </p>
        </div>
      </div>
      

    </div>
  );
};

export default Stats;
