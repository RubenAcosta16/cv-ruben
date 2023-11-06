"use client";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

import Image from "next/image";
import Navbar from "../components/myNavBar/NavBar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects/projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="">
        {/* responsive falta */}
        {/* <Navbar></Navbar> */}

        {/* about me */}
        <About></About>
        {/* colocar mas texto, cosas que me gusten o nose, el tipico me apasiona */}
        {/* lorem*20 */}

        {/* skills */}
        <Skills></Skills>

        {/* i think those things will be together */}
        {/* debera tener un pt-24 */}
        {/* <div className="bg-rose-500 w-full h-[100px]"></div> */}
        {/* projects */}
        <Projects></Projects>

        <div className="bg-waves -mt-48 lg:-mt-28  relative flex flex-col">
          <div className="relative xl:-top-64 lg:-top-52 sm:-top-36 -top-16 z-0 w-full h-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                
                fill-opacity="1"
                d="M0,128L48,133.3C96,139,192,149,288,133.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="fill-waves"
              ></path>
            </svg>
          </div>
          {/* contact me */}
          <Contact></Contact>

          {/* footer */}

        </div>
      </div>
    </NextUIProvider>
  );
}
