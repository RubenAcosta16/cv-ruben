// import ProjectLink from "./projectLink";
import { motion } from "framer-motion";
import { Poppins, Nunito } from "@next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

import "./projects.css";



export default function projects() {
  return (
    <div id="projects"
      className={`p-12 pt-40 pb-52 flex flex-col backgroundCross dark:bg-slate-900 relative -top-44  ${poppins.className} relative`}
    >
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
              Hello! My name is Ruben Acosta. I’m a Frontend Developer and{" "}
              <span className="strongText">UI Designer</span>. I specialize in
              building visually appealing and highly functional user interfaces.
              Here, I showcase <span className="strongText">my projects</span>,
              professional experience, and share insights from my{" "}
              <span className="strongText">journey in web development.</span>
              {/* One of the things I <span className="strongText">like</span> the
              most is to build and design things, and with programming{" "}
              <span className="strongText">I can do all that</span>, that is why
              I like it. */}
              {/* Since I was a teenager I learned to program and design, and learning these technologies
              has forced me to adapt to different environments. */}
            </motion.p>
          </div>
          {/* fin levitar */}

      {/* figuras flotando */}
      <motion.div
        className="absolute top-[470px]  left-0 z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
      >
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
            delay: 0.5,
          }}
          className=""
        >
          <img src="/blob (3).svg" alt="" className="w-[450px] h-[450px]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-[260px] right-[5%] z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <motion.div
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
          <img src="/blob (4).svg" alt="" className="w-[350px] h-[350px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
