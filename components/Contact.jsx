"use client";

import { useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input, Textarea, Button } from "@nextui-org/react";

import { motion } from "framer-motion";
import { Poppins, Nunito } from "@next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

import "./gradients.css";



const socialLinks = [
  {
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 496 512"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" className=" fill-stone-300"/>
      </svg>
    ),
    name: "Github",
    link:""
  },
  {
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" className=" fill-stone-300"/>
      </svg>
    ),
    name: "LinkedIn",
    link:""
  },
];

export default function Contact({theme}) {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const messageError = (txt) => {
    toast.error(txt, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme=="light"?"light":"dark",
    });
  };
  
  const messageSuccess = (txt) => {
    toast.success(txt, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme=="light"?"light":"dark",
    });
  };


  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    // console.log(e.target)

    // const formData = new FormData(e.target);

    const name = formRef.current.elements.name.value;
    const email = formRef.current.elements.email.value;
    const message = formRef.current.elements.message.value;

    const messageForm = {
      name,
      email,
      message,
    };
    // messageSuccess("Email has send");
    // console.log(messageForm)

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageForm),
    });
    const data = await res.json();
    await setLoading(false);

    // console.log(data.error);
    if (data.error == null) {
      formRef.current.elements.name.value = "";
      formRef.current.elements.email.value = "";
      formRef.current.elements.message.value = "";
      messageSuccess("Email was send");
    } else {
      console.log(data.error);
      messageError("Email wasn´t send");
    }
  }

  return (
    <div className="flex-center lg:-mt-28">
      {/* <div className="shadow w-40 h-60 dot" style={{boxShadow:"inset 0 0 20px rgba(0, 0, 0, 0.5)"}}></div> */}

      <div
        className={`flex flex-col w-[690px] gap-4 px-[70px] pb-[50px] ${poppins.className}`}
      >
        {/* usar next ui */}

        <div className="flex justify-between flex-col gap-5">
          <div>
            <h1 className="text-[56px] font-extrabold text-white relative z-20 mt-3">
              Contact
            </h1>
            <p className="text-stone-300 text-[18px]">
              Email: 1511ruben@gmail.com
            </p>
          </div>
          <ul className="flex flex-row justify-start gap-10">
            {socialLinks.map((socialLink, index) => (
              <motion.li key={index} className="text-[35px]" whileHover={{scale:0.9}}>
                <a href={socialLink.link} >{socialLink.img}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        <form
          ref={formRef}
          className="flex items-center md:justify-between justify-start gap-5 flex-col"
        >
          <Input
            type="Name"
            variant="underlined"
            label="Name"
            className="dark text-stone-100"
            size="lg"
            name="name"
            // color="primary"
          />
          {/* <input
            type="text"
            name=""
            id=""
            style={{ background: "none" }}
            className="border-b-3 p-1 pb-0 font-normal text-[19px] text-stone-300 border-stone-800 active:border-none"
          /> */}
          <Input
            type="email"
            variant="underlined"
            label="Email"
            // placeholder="Email"
            // className="md:-mt-10"
            className="dark text-stone-300"
            size="lg"
            name="email"
            // color="primary"
          />
          <Textarea
            variant="underlined"
            label="Message"
            // labelPlacement="outside"
            // description="Enter a concise description of your project."
            className="dark text-stone-300"
            size="lg"
            name="message"
            // color="primary"
          />

          {/* <button
            onClick={handleSubmit}
            type="submit"
            className="bg-primary hover:bg-sky-500  text-white px-4 py-2 rounded-lg"
          >
            {!loading ? "Send Email" : "loading..."}
          </button> */}

          <Button
            onClick={handleSubmit}
            type="submit"
            color="primary"
            isLoading={loading}
          >
            Send Email
          </Button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
