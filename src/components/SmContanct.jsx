import { Code, Github, Home, Linkedin, Mail, Send } from "lucide-react";
import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaMailBulk,
  FaTelegram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import React from "react";

const SmContanct = ({ onBackToTop }) => {
  return (
    <div className="fixed bottom-7 z-20 bg-primary/55 backdrop-blur-lg rounded-2xl p-2">
      <div className="flex gap-2  ">
        <button onClick={onBackToTop}>
          <FaHome className="size-7 sm:size-9 sm:p-2 hover:bg-base-300/65 duration-100 p-1 rounded-lg transition-all" />
        </button>

        <a href="https://github.com/fira-g/" target="_blank">
          <FaGithub className="size-7 sm:size-9 sm:p-2 hover:bg-base-300/65 duration-100 p-1 rounded-lg transition-all" />
        </a>
        <a href="https://leetcode.com/u/firaol_gula/" target="_blank">
          <SiLeetcode className="size-7 sm:size-9 sm:p-2 hover:bg-base-300/65 duration-100 p-1 rounded-lg transition-all" />
        </a>

        <a href="https://t.me/Firaol_18" target="_blank">
          <FaTelegram className="size-7 sm:size-9 sm:p-2 hover:bg-base-300/65 duration-100 p-1 rounded-lg transition-all" />
        </a>
        <a href="mailto:firaolgula@gmail.com" target="_blank">
          <FaEnvelope className="size-7 sm:size-9 sm:p-2 hover:bg-base-300/65 duration-100 p-1 rounded-lg transition-all" />
        </a>
      </div>
    </div>
  );
};

export default SmContanct;
