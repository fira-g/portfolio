import React, { useState } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { Book, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();
  const [dark, setDark] = useState(false);
  const combinedClick = () => {
    setDark(!dark);
    dark ? setTheme("light") : setTheme("black");
  };
  return (
    <div className=" fixed backdrop-blur-lg w-full z-1000 bg-base-100/80">
      <div className=" w-full  shadow-base-200 ">
        <div className="px-2 md:px-4 lg:px-8">
          <div className="flex p-2 justify-between">
            <h1 className="font-extrabold text-2xl">{"< FiraDevs />"}</h1>
            <div className="flex justify-between gap-3 ">
              <button
                className="bg-primary/15 size-8 p-2 rounded-xl flex justify-center items-center hover:bg-primary/30"
                onClick={() => combinedClick()}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
