"use client";

import "./about.css";
import { Poppins } from "@next/font/google";
import { motion } from "framer-motion";

import "./superButton.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

export default function About() {
  return (
    <div className="backgroundDot w-full pb-24 flex flex-col justify-center items-center z-0 relative">
      <div className="z-30 flex flex-col justify-center items-center">
        <motion.div
          className="p-10 bg-white my-32"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { once: false, amount: 0.25 },
          }}
          // viewport={{ once: false, amount: 0.25 }}
        >
          <p className="text-lg ml-20">Hi there!</p>
          <p className="text-[80px] font-bold">
            {/* lo del I'm */}
            <span className="text-[40px] font-normal">Im</span> Ruben Acosta
          </p>
          <p className="text-3xl font-bold ml-12">Front end developer</p>
        </motion.div>

        {/* levitar */}
        <div className="mb-16 -mt-[70px]   relative ">
          <div
            className="absolute top-[7px] left-[13px] w-[424px] h-[136px] border-xl rounded-lg"
            style={{
              // boxShadow: "13px 15px  rgb(14 116 144)",
              backgroundColor: "rgb(14 116 144)",
            }}
          ></div>
          <motion.p
            // style={{ boxShadow: "13px 15px rgba(14 116 144 0.7)",transformStyle:"preserve-3d" }}
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
            className=" p-3 bg-sky-950 text-xl border-xl text-white rounded-lg w-[424px]"
          >
            Hi, one of the things I like the most is to build and design things,
            and with programming I can do all that, that is why I like it.
          </motion.p>
        </div>
      </div>

      <motion.div
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
          delay:0.5,
        }}
        className="absolute top-[20px] -left-[70px] z-0"
      >
        <img src="/blob (2).svg" alt="" className="w-[450px] h-[450px]" />

      </motion.div>
      <motion.div
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
          delay:2.5,
        }}
        className="absolute top-[260px] right-[30px] z-0"
      >
        <img src="/blob (1).svg" alt="" className="w-[350px] h-[350px]" />
      </motion.div>
    </div>
  );
}
