import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useThemeStore } from "./store/useThemeStore";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <div
        data-theme={theme}
        className="min-h-screen  bg-base-100  bg-[radial-gradient(var(--color-primary)_0.35px,var(--color-base-100)_0.35px)] bg-[length:10px_10px] relative "
      >
        <div className="flex flex-col  h-full  ">
          <Navbar className="backdrop-blur-2xl bg-base-100/80" id="nav" />
          <About id="about" />

          <Projects />

          <Education />
          <Skills />
        </div>
        <div
          className={`size-[100%] rounded-[50%] ${
            theme == "light" && ""
          }   top-0 left-0 fixed animate-ping`}
        ></div>
      </div>
    </>
  );
}

export default App;
