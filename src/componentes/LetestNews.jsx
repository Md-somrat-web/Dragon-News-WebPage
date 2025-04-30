import React from "react";
import Marquee from "react-fast-marquee";

const LetestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3 my-5">
      <h3 className="text-base-100 bg-secondary px-6 py-2 rounded">Latest</h3>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={100}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          tenetur, at est recusandae repudiandae, sequi libero deleniti
          distinctio ratione
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          tenetur, at est recusandae repudiandae, sequi libero deleniti
          distinctio ratione
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          tenetur, at est recusandae repudiandae, sequi libero deleniti
          distinctio ratione
        </p>
      </Marquee>
    </div>
  );
};

export default LetestNews;
