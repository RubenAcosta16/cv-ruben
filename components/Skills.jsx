"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins, Nunito } from "@next/font/google";
import { Button } from "@nextui-org/react";
import Image from "next/image";

import SlideContainer from "./Skills/SlideContainer";

import ButtonSlide from "./Skills/ButtonSlide";

// slide arriba asi como esta y abajo contrario
// actualizar textos en proyectos que añadi
// mejorar textos o gramatica

import { fadeIn, slideAndRotate } from "../utils/motion";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

const skills = [
  {
    name: "Html",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "Css",
    img: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
  },
  {
    name: "Javascript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "Java",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
  },
];

const languages = [
  // {
  //   name: "Bootstrap",
  //   img: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
  // },
  // {
  //   name: "Tailwind",
  //   img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
  // },
  {
    name: "React js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    name: "Node js",
    img: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
  },
  {
    name: "Next js",
    img: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
  },
  {
    name: "Framer Motion",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-framer-3628191-3031011.png",
  },
  {
    name: "Firebase",
    img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
  },
  {
    name: "MongoDb",
    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  // {
  //   name: "Stripe",
  //   img: "https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png?f=webp",
  // },
];

export default function Skills() {
  const [skillsButton, setSkillsButton] = useState(false);
  const [languagesButton, setLanguagesButton] = useState(false);
  return (
    <div id="skills" className="flex flex-col relative -top-24 ">
      {/* el svg */}
      {/* error caundo esta a menos de 358px */}
      <div className="relative lg:-top-32 sm:-top-14 top-1 z-10 w-full h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-waves"
            // fill="#0099ff"
            fill-opacity="1"
            d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,106.7C560,117,640,139,720,133.3C800,128,880,96,960,90.7C1040,85,1120,107,1200,101.3C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className={`w-full bg-waves ${poppins.className} pb-[30px] md:pb-0`}>
        <h2 className="text-[50px] font-extrabold text-center mb-16 text-white relative z-20">
          Skills
        </h2>

        {/* cada skill que tenga un tap */}
        <div className=" flex justify-center items-center flex-col gap-20">
          {/* insertar una figura diferente asi como en mi cv antiguo */}

          {/* levitar */}
          <div className="relative z-50">
            <div
              className="absolute top-[7px] left-[13px] w-[300px] sm:w-[424px] opacity-0 sm:opacity-100 h-[108px] border-xl rounded-lg"
              style={{
                // boxShadow: "13px 15px  rgb(14 116 144)",
                backgroundColor: "rgb(14 116 144)",
              }}
            ></div>
            <motion.p
              style={{
                transformStyle: "preserve-3d",
              }}
              initial={{
                transform: "translateZ(4px) translateY(-2px) translateX(-2px)",
              }}
              animate={{
                transform: "translateZ(32px) translateY(-8px) translateX(8px)",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
              className={`p-3 bg-sky-950 dark:bg-sky-900 text-lg border-xl text-white rounded-lg w-[300px] sm:w-[424px] ${nunito.className}`}
            >
              One of the things I <span className="strongText">like</span> the
              most is to build and design things, and with programming{" "}
              <span className="strongText">I can do all that</span>, that is why
              I like it.
              {/* Since I was a teenager I learned to program and design, and learning these technologies
              has forced me to adapt to different environments. */}
            </motion.p>
          </div>
          {/* fin levitar */}

          <div className="flex flex-col gap-y-10 w-full">
            <SlideContainer
              skills={skills}
              skillsButton={skillsButton}
              setSkillsButton={setSkillsButton}
            >
              Languages
            </SlideContainer>

            {/* <Blobs_1></Blobs_1> */}

            <SlideContainer
              skills={languages}
              skillsButton={languagesButton}
              setSkillsButton={setLanguagesButton}
              direction={false}
            >
              Libraries
            </SlideContainer>

            <Blobs_2></Blobs_2>
          </div>
        </div>
      </div>

      {/* el svg */}
      <div className=" z-10 w-full h-20 -mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            // fill="#0099ff"
            className="fill-waves"
            fill-opacity="1"
            d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,106.7C560,117,640,139,720,133.3C800,128,880,96,960,90.7C1040,85,1120,107,1200,101.3C1280,96,1360,64,1400,48L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
} 



function Blobs_2() {
  return (
    <div className="hidden md:block z-40">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideAndRotate("left")}
        className="absolute top-[120px] -left-[50px]   "
      >
        <motion.div
          id="blobs-1"
          style={{
            transformStyle: "preserve-3d",
          }}
          initial={{
            transform: "translateZ(4px) translateY(-2px) translateX(-2px)",
          }}
          animate={{
            transform: "translateZ(32px) translateY(-18px) translateX(18px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <img
            src="/blob (1).svg"
            alt=""
            className="w-[400px] h-[400px]  object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideAndRotate("right")}
        className="absolute top-[190px] right-[30px]     "
      >
        <motion.div
          id="blobs-2"
          style={{
            transformStyle: "preserve-3d",
          }}
          initial={{
            transform: "translateZ(32px) translateY(-18px) translateX(18px)",
          }}
          animate={{
            transform: "translateZ(4px) translateY(-2px) translateX(-2px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
            delay: 1,
          }}
          className=""
        >
          <img src="/blob.svg" alt="" className="w-[400px] h-[400px]  " />
        </motion.div>
      </motion.div>
    </div>
  );
}
