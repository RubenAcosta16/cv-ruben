import ProjectLink from "./projectLink";
import { motion } from "framer-motion";
import { Poppins, Nunito } from "@next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

import "./projects.css";

const arrProjects = [
  {
    name: "Amazon 2.0",
    description:
      "This is a page imitating the amazon website, including payments, global status usage and login.",
    img: "/project-1.png",
    url: "https://amazon-2-0-nextjs-r.vercel.app/",
  },
  {
    name: "Notas de palabras",
    description:
      "This page was made to help me to learn English, only you need to create an account and create your own words.",
    img: "/project-2.png",
    url: "https://notasdepalabras.vercel.app/",
  },
];

export default function projects() {
  return (
    <div
      className={`p-12 pt-40 pb-52 flex flex-col backgroundCross dark:bg-slate-900 relative -top-44  ${poppins.className} relative`}
    >
      {/* usar next ui para el carousel */}
      <h1 className="text-[56px] font-extrabold text-center mb-16 text-black dark:text-slate-100 relative z-20">
        Projects
      </h1>
      <div className="flex-center">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          {arrProjects.map((project, index) => (
            <ProjectLink key={index} project={project}></ProjectLink>
          ))}
        </ul>
      </div>

      {/* figuras flotando */}
      <motion.div
        className="absolute top-[470px] lg:top-[330px] left-0 z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: .6,
          delay:0.3
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
          duration: .6,
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
