"use client";

import "./about.css";
import { Poppins, Nunito } from "@next/font/google";
import { motion, useAnimate } from "framer-motion";
import { useWindowSize } from "react-use";

import { slideAndRotate, fadeIn } from "../utils/motion";

import "./superButton.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });

export default function About() {
  const [scope, animate] = useAnimate();
  const { width, height } = useWindowSize();

  // setInterval(async () => {
  //   const blobSelected=Math.round(Math.random()*5)
  //   console.log(blobSelected)

  //   await animate(`#blobs-${blobSelected}`, { opacity:0 }, { duration: 1.5 });
  //   // await animate(`#blobs-${blobSelected}`, { opacity:1 }, { duration: 1.5,delay:2 });

  //   for (let i = 1; i <= 5; i++) {
  //     animate(`#blobs-${i}`, { opacity:1 }, { duration: 1.5,delay:2 });

  //   }

  // }, 5000);

  return (
    <div className="backgroundDot dark:bg-slate-900  w-full pb-24 lg:pb-32 flex flex-col justify-center items-center z-0 relative text-black">
      <div className="z-50 xl:z-30 flex flex-col justify-center items-center">
        <motion.div
          className="p-9 bg-white dark:bg-slate-900 text-black dark:text-slate-100 my-32 md:w-auto sm:w-[400px] w-[300px]"
          initial="hidden"

          whileInView={width >= 640 ?"show":""}
          animate={width <= 640 ?"show":""}
          
          variants={fadeIn("left", "tween", 0.2, 0.3)} //
        >
          <motion.p
            className="sm:text-lg text-[13px] ml-20 text-stone-300"
            initial="hidden"
            whileInView="show"
            variants={fadeIn("down", "tween", 0.6, 0.3)}
          >
            Hi there!
          </motion.p>
          <p
            className={`sm:text-[80px] text-[40px] font-bold ${poppins.className}`}
            // initial="hidden"
            // whileInView="show"
            // variants={fadeIn("up", "tween", 0.6, 0.3)}
          >
            {/* lo del I'm */}
            <motion.span
              className="sm:text-[40px] text-[25px] font-normal inline-block strongText"
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.4, 0.3)} //
            >
              I´m
            </motion.span>{" "}
            Ruben Acosta
          </p>
          <motion.p
            className="sm:text-3xl text-[20] font-bold ml-12"
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.6, 0.3)}
          >
            Front end{" "}
            <span className="text-sky-500 text-[24px]">developer</span>
          </motion.p>
        </motion.div>

        {/* levitar */}
        <div className="mb-16 -mt-[70px] relative ">
          <div
            className="absolute top-[7px] left-[13px] w-[300px] sm:w-[424px] opacity-0 sm:opacity-100 h-[108px] border-xl rounded-lg "
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
            className={`p-3 bg-sky-950 dark:bg-sky-900 text-xl border-xl text-white font-normal rounded-lg w-[300px] sm:w-[424px] ${nunito.className}`}
          >
            Hi, I am a 19 year old{" "}
            <span className="strongText">programmer</span>, passionate about
            this world of programming and{" "}
            <span className="strongText">web application</span> design.
          </motion.p>
        </div>
      </div>

      {/* figuras flotando */}
      <div ref={scope} className=" ">
        <motion.div
          className="absolute top-[20px] left-0 z-40  "
          initial="hidden"
          // {width <= 640?{}:{}}
          whileInView={width >= 640 ?"show":""}
          animate={width <= 640 ?"show":""}

          variants={slideAndRotate("left")}
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
            className=""
          >
            <img src="/blob (2).svg" alt="" className="w-[350px] h-[350px]  " />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-[260px] right-[30px] z-40"
          initial="hidden"

          whileInView={width >= 640 ?"show":""}
          animate={width <= 640 ?"show":""}

          variants={slideAndRotate("right")}
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
            className="  "
          >
            <img src="/blob.svg" alt="" className="w-[350px] h-[350px]  " />
          </motion.div>
        </motion.div>

        {/* <motion.div
          id="blobs-3"
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
            delay: 0.5,
          }}
          className="absolute -top-[10px] left-[270px] z-40 hidden sm:block  "
        >
          <img src="/blob (3).svg" alt="" className="w-[450px] h-[450px]  " />
        </motion.div>

        <motion.div
          id="blobs-4"
          style={{
            transformStyle: "preserve-3d",
          }}
          initial={{
            transform: "translateZ(10px) translateY(-2px) translateX(-2px)",
          }}
          animate={{
            transform: "translateZ(42px) translateY(-18px) translateX(18px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -top-[10px] -right-[20px] z-40 hidden sm:block  "
        >
          <img src="/blob.svg" alt="" className="w-[350px] h-[350px]  " />
        </motion.div>

        <motion.div
          id="blobs-5"
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
          className="absolute top-[320px] left-[50px] z-40 hidden sm:block  "
        >
          <img src="/blob (4).svg" alt="" className="w-[350px] h-[350px]  " />
        </motion.div> */}
      </div>
    </div>
  );
}
