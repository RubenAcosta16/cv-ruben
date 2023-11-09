"use client";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";


import { AnimatePresence} from "framer-motion";

import Nav from "./Nav";

export default function NavBar({setTheme,theme}) {
  const [isActive, setIsActive] = useState(false);

  // tema oscuro
  // const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(prefers-color-scheme:dark)");
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        // return "dark"
        setTheme("dark");
      }
    }
  }, []);

  function handleChangeTheme() {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
    setIsActive(false)
  }

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative z-30">
      {/* icon button */}
      <div className="shadow-md shadow-black">
        {!isActive ? (
          // barras
          <motion.div
            onClick={() => {
              setIsActive(true);
            }}
            className="background-color-nav-btn fixed top-3 right-4 w-14 h-14 flex justify-center items-center rounded-full cursor-pointer z-10"
            whileHover={{ scale: 1.1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                style={{ fill: "white" }}
              />
            </svg>
          </motion.div>
        ) : (
          // cruz
          <motion.div
            className="background-color-nav-btn fixed top-3 right-4 w-14 h-14 flex justify-center items-center rounded-full  cursor-pointer z-10"
            onClick={() => {
              setIsActive(false);
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="w-8 h-8"
            >
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                style={{ fill: "white" }}
              />
            </svg>
          </motion.div>
        )}
      </div>


      <AnimatePresence>
        {isActive && <Nav handleChangeTheme={handleChangeTheme} currentTheme={theme}></Nav>}
      </AnimatePresence>
    </div>
  );
}
