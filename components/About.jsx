"use client";

import "./about.css";
import { Poppins } from "@next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

export default function About() {
  return (
    <div className="backgroundDot w-full pb-24 flex justify-center items-center z-0">
      <motion.div
        className="p-10 bg-white my-32"
        initial={{ opacity: 0,x:100 }}
        whileInView={{ opacity: 1,x:0, transition: { once: false, amount: 0.25 } }}
        // viewport={{ once: false, amount: 0.25 }}
      >
        <p className="text-lg ml-20">Hi there!</p>
        <p className="text-[80px] font-bold">
          <span className="text-[40px] font-normal">I'm</span> Ruben Acosta
        </p>
        <p className="text-3xl font-bold ml-12">Front end developer</p>
      </motion.div>
    </div>
  );
}
