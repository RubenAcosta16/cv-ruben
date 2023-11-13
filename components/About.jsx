"use client";

import "./about.css";
import { Poppins, Nunito } from "@next/font/google";
import { motion, useAnimate } from "framer-motion";

import "./superButton.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });

export default function About() {
  const [scope, animate] = useAnimate();

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
          // initial={{ opacity: 0, x: 100 }}
          // whileInView={{
          //   opacity: 1,
          //   x: 0,
          //   transition: { once: false, amount: 0.25 },
          // }}
          // style={{backdropFilter: "blur(25px)"}}
          // viewport={{ once: false, amount: 0.25 }}
        >
          <p className="sm:text-lg text-[13px] ml-20 ">Hi there!</p>
          <p
            className={`sm:text-[80px] text-[40px] font-bold ${poppins.className}`}
          >
            {/* lo del I'm */}
            <span className="sm:text-[40px] text-[25px] font-normal">
              I´m
            </span>{" "}
            Ruben Acosta
          </p>
          <p className="sm:text-3xl text-[20] font-bold ml-12">
            Front end developer
          </p>
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
            Hi, I am a 19 year old programmer, passionate about this world of
            programming and web application design.
          </motion.p>
        </div>
      </div>

      {/* figuras flotando */}
      <div ref={scope} className=" ">
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
          className="absolute top-[20px] -left-[70px] z-40  "
        >
          <img src="/blob (2).svg" alt="" className="w-[350px] h-[350px]  " />
        </motion.div>

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
          className="absolute top-[260px] right-[30px] z-40  "
        >
          <img src="/blob (1).svg" alt="" className="w-[350px] h-[350px]  " />
        </motion.div>

        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
}
