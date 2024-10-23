import MineScrollShadowMotion from "./MineScrollShadowMotion";
import LinkSkill from "./LinkSkill";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import ButtonSlide from "./ButtonSlide";


export default function SlideContainer({
  children,
  skills,
  skillsButton,
  setSkillsButton,
  direction = true,
}) {
  const [scope, animate] = useAnimate();

  const divGrid = (
    <div className="grid grid-cols-2 md:grid-cols-3 z-30 gap-4 w-auto mx-auto">
      {skills.map((language, index) => (
        <LinkSkill key={index} skill={language}></LinkSkill>
      ))}
    </div>
  );

  const divMotion = (
    <div className="h-[121px]">
      <MineScrollShadowMotion direction={direction}>
        <div className="w-[5px] h-full bg-emerald-600 rounded-xl"></div>
        {skills.map((language, index) => (
          <LinkSkill key={index} skill={language}></LinkSkill>
        ))}
        <div className="w-[5px] h-[121px] bg-emerald-600 rounded-xl"></div>
        {skills.map((language, index) => (
          <LinkSkill key={index} skill={language}></LinkSkill>
        ))}
      </MineScrollShadowMotion>
    </div>
  );

  const [skillDiv, setSkillDiv] = useState(divMotion);

  async function handleSkillDiv() {
    return new Promise((resolve) => {
      // Establece el nuevo contenido
      const newContent = skillsButton ? divMotion : divGrid;
      setSkillDiv(newContent);
  
      // Utiliza setTimeout para dar tiempo a React a actualizar el DOM
      setTimeout(() => {
        resolve();
      }, 50); // Un pequeño retardo para asegurarse de que se renderiza
    });
  }

  async function animations() {
    await animate(scope.current, { height: "0" }, { duration: 0.4, ease: [0.76, 0, 0.24, 1] });
    
    await handleSkillDiv();

    await animate(scope.current, { height: "auto" }, { duration: 0.4, ease: [0.76, 0, 0.24, 1] });
  }

  return (
    <div className="flex flex-col gap-y-6 relative overflow-hidden w-[80%] mx-auto">
      <div className="text-center font-bold text-[36px] text-sky-200 dark:text-sky-500 z-50 flex flex-col justify-center items-center">
        {children}
        <ButtonSlide
          skillsButton={skillsButton}
          setSkillsButton={setSkillsButton}
          click={animations}
        >
          {skillsButton ? "Show all" : "Show list"}
        </ButtonSlide>
      </div>

      <div className="mx-auto h-auto" ref={scope}>
        {skillDiv}
      </div>
    </div>
  );
}
