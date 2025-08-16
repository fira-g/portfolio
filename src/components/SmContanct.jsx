import { Code, Github, Home, Linkedin, Mail, Send } from "lucide-react";
import React from "react";

const SmContanct = ({ onBackToTop }) => {
  return (
    <div className="fixed bottom-7 z-10 bg-primary/55 backdrop-blur-lg rounded-2xl p-2">
      <div className="flex gap-2  ">
        <button onClick={onBackToTop}>
          <Home className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
        </button>

        <a href="https://github.com/fira-g/" target="_blank">
          <Github className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
        </a>
        <a href="https://leetcode.com/u/firaol_gula/" target="_blank">
          <Code className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
        </a>

        <a href="https://t.me/Firaol_18" target="_blank">
          <Send className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
        </a>
        <a href="mailto:firaolgula@gmail.com" target="_blank">
          <Mail className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
        </a>
      </div>
    </div>
  );
};

export default SmContanct;
