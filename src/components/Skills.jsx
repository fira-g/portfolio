import React from "react";
import { skills } from "../constants/Skills";

const Skills = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-2 mb-25 sm:mb-20">
      <div className="container  h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl  mb-8 relative z-2  mt-15">Skills</h1>
        <div className="z-2 max-w-[60%] flex justify-center items-center">
          <div>
            {skills.map((skill) => (
              <div className="badge  bg-primary-content rounded-lg  hover:bg-primary-content/70 text-primary font-bold badge-sm sm:badge-lg mr-2 mt-2 cursor-pointer transition-all border-0">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
