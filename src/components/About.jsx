import React from "react";
import "../App.css";
import SmContanct from "./SmContanct";
const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen relative flex justify-center items-center p-2">
      <div className="container flex flex-col-reverse gap-3 items-center sm:flex-row p-2 sm:justify-between">
        <div className="left flex flex-col items-center text-center sm:text-left sm:gap-3 sm:items-start sm:max-w-[50%] ">
          <h1 className=" text-xl md:text-3xl">
            Hi 👋, I am{" "}
            <span className="font-bold text-3xl md:text-5xl">Firaol Gula</span>
          </h1>
          <h2 className="mt-2 text-sm md:text-xl">
            A passionate Full-stack developer proficient in building and
            deploying robust web applications from front-end user interfaces to
            back-end infrastructure.
          </h2>
          <div className="animate-btn mt-10 flex justify-center items-center">
            <a href="https://flowcv.com/resume/gfqdsh2ct3uj" target="_blank">
              <button className="w-[96px] md:w-[120px] btn btn-primary rounded-xl border-0">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="reight ">
          <div className="avatar ">
            <div className="mask bg-primary/70  hover:bg-primary/78 mask-squircle w-40 md:w-55 transition-all">
              <img src="p3.png" />
            </div>
          </div>
        </div>
      </div>
      <SmContanct onBackToTop={handleScrollToTop} />
    </div>
  );
};

export default About;
