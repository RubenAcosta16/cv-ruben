import { motion } from "framer-motion";


export default function MineScrollShadowMotion({ children, direction = true }) {
  return (
    <>
      <motion.ul
        // el calc es lo que hace que parezca infinito, debe ser el numero de items*2
        className="flex flex-row gap-x-4 sm:gap-x-10 px-4 absolute  left-0 w-[calc(100% * 18)] z-30 "
        initial={{
          transform: direction ? "translateX(0)" : "translateX(-50%)",
        }}
        animate={{
          transform: direction ? "translateX(-50%)" : "translateX(0)",
        }}
        transition={{
          repeat: Infinity,
          // repeatType: "mirror",
          duration: direction ? 22 : 33,
          ease: "linear",
        }}
      >
        {children}
      </motion.ul>

      {/* degradados */}
      <div className="absolute inset-y-0 left-0 w-[70px] sm:w-[300px] bg-gradient-to-r from-cyan-800 dark:from-[#061f36] via-transparent to-transparent z-40 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-[70px] sm:w-[300px]  bg-gradient-to-l from-cyan-800 dark:from-[#061f36] via-transparent to-transparent z-40 pointer-events-none"></div>
    </>
  );
}
