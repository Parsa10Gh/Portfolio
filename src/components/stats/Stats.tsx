import React from "react";
import { BsEmojiSmile } from "react-icons/bs";

const Stats = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 p-10">
      <div className="flex px-6 bg-amber-300">
        <BsEmojiSmile />
        <div className="">
          <h1>232</h1>
          <p>
            <strong>Happy Clients</strong> Lorem ipsum dolor consectetur.
          </p>
        </div>
      </div>
      <div className="flex">
        <BsEmojiSmile />
        <div>
          <h1>232</h1>
          <p>
            <strong>Happy Clients</strong> Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className="flex">
        <BsEmojiSmile />
        <div>
          <h1>232</h1>
          <p>
            <strong>Happy Clients</strong> Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className="flex">
        <BsEmojiSmile />
        <div>
          <h1>232</h1>
          <p>
            <strong>Happy Clients</strong> Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Stats;
