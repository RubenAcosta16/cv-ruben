"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

export default function ButtonSlide({
  children,
  skillsButton,
  setSkillsButton,
  click,
}) {
  return (
    <>
      <Button
        color="primary"
        variant="light"
        onClick={async () => {
          setSkillsButton(!skillsButton);
          await click();
        }}
        className="w-[120px] text-center rounded-full relative overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={skillsButton ? "show-all" : "show-list"}
            initial={{ x: skillsButton ? -200 : 200, opacity: 0 }} // Entra más lejos desde la izquierda o derecha
            animate={{ x: 0, opacity: 1 }} // Aparece en el centro
            exit={{ x: skillsButton ? -200 : 200, opacity: 0 }} // Sale más allá del botón
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Button>
    </>
  );
}
