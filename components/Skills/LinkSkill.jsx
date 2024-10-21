export default function LinkSkill({ skill }) {
    return (
      <li className="w-[120px] sm:w-[230px] z-[60] rounded-xl flex flex-col justify-center bg-cyan-600 dark:bg-cyan-900 px-10 py-6 items-center relative mx-auto">
        {/* <span className="text-[25px] sm:text-[45px] ">{skill.img}</span>{" "} */}
        <img className="w-[25px] sm:w-[45px]" src={skill.img} alt="" />
        <div>
          <span className="text-sm sm:text-xl font-semibold text-white text-center">
            {skill.name}
          </span>
        </div>
      </li>
    );
  }