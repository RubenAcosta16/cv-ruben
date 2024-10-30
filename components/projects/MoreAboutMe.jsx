// import ProjectLink from "./projectLink";
import { motion } from "framer-motion";
import { Poppins, Nunito } from "@next/font/google";
import { Button } from "@nextui-org/react";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

import "./projects.css";

export default function projects() {
  return (
    <div
      id="projects"
      className={`p-12 pt-40 pb-44 flex flex-col backgroundCross dark:bg-slate-900 relative -top-44  ${poppins.className} relative`}
    >
      {/* levitar */}
      <div className="relative z-50  mx-auto">
        <div
          className="absolute top-[7px] left-[13px] w-[300px] sm:w-[424px] opacity-0 sm:opacity-100 h-[136px] border-xl rounded-lg"
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
          My name is Ruben Acosta. I’m a Frontend Developer and{" "}
          <span className="strongText">UI Designer</span>. I specialize in
          building visually appealing and highly functional user interfaces.
          {/* One of the things I <span className="strongText">like</span> the
              most is to build and design things, and with programming{" "}
              <span className="strongText">I can do all that</span>, that is why
              I like it. */}
          {/* Since I was a teenager I learned to program and design, and learning these technologies
              has forced me to adapt to different environments. */}
        </motion.p>
      </div>
      {/* fin levitar */}

      <div className=" w-[70%] md:w-[50%] mx-auto mt-[70px] text-center">
        {" "}
        <p>
          I study computer systems engineering and here I share my projects and
          my professional profile.
        </p>
        <p className="mt-[20px]">
          “Curious and self-taught, always on the lookout for new technologies
          that improve the user experience...”
        </p>
        
        <Button className="mt-[30px] strongText rounded-full py-2 px-10"  color="primary"
        variant="light">Download CV</Button>
      </div>
    </div>
  );
}
