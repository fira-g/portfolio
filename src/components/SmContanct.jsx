import { Github, Home, Linkedin, Mail, Send } from "lucide-react";
import React from "react";

const SmContanct = ({ onBackToTop }) => {
  return (
    <div className="fixed sm:hidden bottom-7 z-10 bg-primary/70 backdrop-blur-lg rounded-2xl p-2">
      <div className="flex gap-2  ">
        <button onClick={onBackToTop}>
          <Home className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
        </button>

        <a href="https://github.com/fira-g/" target="_blank">
          <Github className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
        </a>
        <a href="https://www.linkedin.com/in/firaol-gula" target="_blank">
          <Linkedin className="size-6 hover:bg-base-300/65 p-1 rounded-lg transition-all" />
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
