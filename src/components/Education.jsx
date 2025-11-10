import React from "react";
import { FaLink } from "react-icons/fa";

const Education = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pr-3 pl-3 mt-15">
      <h1 className="font-bold text-4xl  mb-10 relative z-2 ">Education</h1>
      <div className="container max-w-3xl flex flex-col gap-2">
        <a
          href="https://google.com"
          target="_blank"
          className="flex gap-5 items-center cursor-pointer z-10 hover:opacity-85"
        >
          <img src="aastu.png" className="size-11 rounded-[50%] mb-1 " alt="" />
          <p className=" font-bold text-sm sm:text-lg border-b-1 font-sans">
            Software Engineering student at Addis Ababa Science and Technology
            University.
          </p>
        </a>

        <a
          href="https://drive.google.com/file/d/1Mgh0LC9B7vRW4Gj_nWZ07fXeAGwXBPFg/view?usp=sharing"
          className="flex gap-5 items-center cursor-pointer z-10 hover:opacity-85"
          target="_blank"
        >
          <img src="GDG.jpg" className="size-11 rounded-[50%]" alt="" />
          <p className="font-bold text-sm sm:text-lg border-b-1 font-sans">
            GDG graduate in backend development with NodeJs.{" "}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Education;
