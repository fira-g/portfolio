import {
  GithubIcon,
  Linkedin,
  Locate,
  LocateIcon,
  LocateOff,
  LucideMessagesSquare,
  Mail,
  MessageCircle,
  PhoneCall,
  Send,
  SendHorizonal,
  SendIcon,
} from "lucide-react";
import React from "react";
//import sendEmail from "../store/sendEmail";
import { useState } from "react";

const Contact = () => {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "email") {
  //     setEmail(value);
  //   } else if (name === "message") {
  //     setMessage(value);
  //   }
  // };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const option = {
  //     email: email,
  //     message: message,
  //   };
  //   await sendEmail(option);
  // };
  return (
    <>
      <div className="bg-base-300 mt-10 rounded-3xl rounded-b-none  w-full  h-full hidden  sm:grid grid-cols-2 place-items-center justify-around pb-10 pt-10">
        <div className="flex flex-col gap-2 p-3 ">
          <h1 className="font-bold">Find Me On </h1>
          <div className="flex gap-2">
            <Mail className="text-red-600" />
            <a
              href="mailto:firaolgula@gmail.com"
              className="hover:text-blue-500"
            >
              Email
            </a>
          </div>
          <div className="flex gap-2">
            <Linkedin className="text-white bg-blue-400 rounded-sm p-1" />
            <a
              href="https://www.linkedin.com/in/firaol-gula"
              className="hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex gap-2">
            <SendIcon className="text-white bg-blue-500 s rounded-xl p-1" />
            <a href="https://t.me/Firaol_18" className="hover:text-blue-500">
              Telegram
            </a>
          </div>
          <div className="flex gap-2">
            <GithubIcon className="text-white bg-black rounded-2xl p-1" />
            <a
              href="https://github.com/fira-g/"
              className="hover:text-blue-500"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* <div className="space-y-2">
          <div className="flex gap-2">
            <LocateOff />
            <p>Addis Ababa, Ethiopia.</p>
          </div>
          <div className="flex gap-2">
            <PhoneCall />
            <p>+251979074849</p>
          </div>
        </div> */}
        <form className="space-y-2 max-w-[250px] p-3">
          <h1 className="font-bold">Quick Email</h1>
          <input
            type="email"
            name="email"
            className="input input-md rounded-lg z-3 focus:outline-0"
            placeholder="youremail@gmail.com"
          />
          <input
            type="text"
            name="message"
            className="input input-md rounded-lg h-[75px] z-3 focus:outline-0"
            placeholder="Your Message"
          />
          <button className="btn btn-sm cursor-pointer z-3">Send</button>
        </form>
      </div>
      <p className="text-center bg-base-300 text-xs ">
        &copy; developed by Firaol Gula 2025.
      </p>
    </>
  );
};

export default Contact;
