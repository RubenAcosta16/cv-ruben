import MineScrollShadowMotion from './MineScrollShadowMotion';
import LinkSkill from './LinkSkill';

import ButtonSlide from "./ButtonSlide";


// hacer tipo transicion como el nav, pero con la altura

export default function SlideContainer({children,skills,skillsButton,setSkillsButton,direction=true}) {
  return (
    <div className="flex flex-col gap-y-6 relative overflow-hidden w-[80%] mx-auto">
      <div
        className={`text-center font-bold text-[36px] text-sky-200 dark:text-sky-500  z-50  flex flex-col justify-center items-center ${
          !skillsButton ? "mb-[180px]" : "mb-0"
        }`}
      >
        {children}
        <ButtonSlide
          skillsButton={skillsButton}
          setSkillsButton={setSkillsButton}
        >
          {skillsButton ? "Show all" : "Show list"}
        </ButtonSlide>
      </div>

      {skillsButton ? (
        <div className="grid grid-cols-1 md:grid-cols-2 z-30 gap-4 w-auto mx-auto">
          {skills.map((language, index) => (
            <LinkSkill key={index} skill={language}></LinkSkill>
          ))}
        </div>
      ) : (
        <MineScrollShadowMotion direction={false}>
          {" "}
          <div className="w-[5px] h-full bg-emerald-600 rounded-xl"></div>
          {skills.map((language, index) => (
            <LinkSkill key={index} skill={language}></LinkSkill>
          ))}
          <div className="w-[5px] h-[121px] bg-emerald-600 rounded-xl"></div>
          {skills.map((language, index) => (
            <LinkSkill key={index} skill={language}></LinkSkill>
          ))}
        </MineScrollShadowMotion>
      )}
    </div>
  );
}
