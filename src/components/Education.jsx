import React from "react";

const Education = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pr-3 pl-3 mt-15">
      <h1 className="font-bold text-4xl  mb-10 relative z-2 ">Education</h1>
      <div className="container max-w-3xl flex flex-col gap-2">
        <div className="flex gap-5 items-center ">
          <img src="aastu.png" className="size-11 rounded-[50%] mb-1 " alt="" />
          <p className=" font-bold text-sm sm:text-lg border-b-1 font-sans">
            Software Engineering student at Addis Ababa Science and Technology
            University.
          </p>
        </div>

        <div className="flex gap-5 items-center ">
          <img src="GDG.jpg" className="size-11 rounded-[50%]" alt="" />
          <p className="font-bold text-sm sm:text-lg border-b-1 font-sans">
            GDG graduate in backend development with NodeJs.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
