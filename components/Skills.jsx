import { motion } from "framer-motion";
import { Poppins, Nunito } from "@next/font/google";
import { ScrollShadow } from "@nextui-org/react";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

const skills = [
  {
    name: "Html",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "Css",
    img: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
  },
  {
    name: "Javascript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "Java",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
  },
];

const languages = [
  {
    name: "Bootstrap",
    img: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
  },
  {
    name: "Tailwind",
    img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
  },
  {
    name: "React js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    name: "Node js",
    img: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
  },
  {
    name: "Next js",
    img: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
  },
  {
    name: "Framer Motion",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-framer-3628191-3031011.png",
  },
  {
    name: "Firebase",
    img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
  },
  {
    name: "MongoDb",
    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Stripe",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png?f=webp",
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col relative -top-24 ">
      {/* el svg */}
      {/* error caundo esta a menos de 358px */}
      <div className="relative lg:-top-32 sm:-top-14 top-1 z-10 w-full h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-waves"
            // fill="#0099ff"
            fill-opacity="1"
            d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,106.7C560,117,640,139,720,133.3C800,128,880,96,960,90.7C1040,85,1120,107,1200,101.3C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className={`w-full bg-waves ${poppins.className}`}>
        <h2 className="text-[50px] font-extrabold text-center mb-16 text-white relative z-20">
          Skills
        </h2>

        {/* cada skill que tenga un tap */}
        <div className=" flex justify-center items-center flex-col gap-20">
          {/* insertar una figura diferente asi como en mi cv antiguo */}

          {/* levitar */}
          <div className="relative ">
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
              One of the things I like the most is to build and design things,
              and with programming I can do all that, that is why I like it.
              {/* Since I was a teenager I learned to program and design, and learning these technologies
              has forced me to adapt to different environments. */}
            </motion.p>
          </div>
          {/* fin levitar */}

          <div className="flex flex-col gap-y-16">
            <div className="flex flex-col gap-y-8">
              <h3 className={`text-center font-bold text-[36px] text-sky-200 dark:text-sky-500 ${poppins.className}`}>Languages</h3>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4 sm:gap-x-10 px-4">
                {skills.map((skill, index) => (
                  <LinkSkill key={index} skill={skill}></LinkSkill>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-8">
              <h3 className={`text-center font-bold text-[36px] text-sky-200 dark:text-sky-500 ${poppins.className}`}>Backend and Libraries</h3>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4 sm:gap-x-10 px-4">
                {languages.map((language, index) => (
                  <LinkSkill key={index} skill={language}></LinkSkill>
                ))}
              </ul>
            </div>
          </div>

          {/* <ul className="flex flex-col block md:hidden">
          <ScrollShadow className="w-[250px] h-[500px]">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="w-[230px] z-20 rounded-xl flex flex-col justify-center bg-cyan-700 px-10 py-6 items-center mb-5"
              >
                <span className="text-[45px] ">{skill.img}</span>{" "}
                <div>
                  <span className="text-xl font-semibold text-white">
                    {skill.name}
                  </span>
                </div>
              </li>
            ))}
          </ScrollShadow>
          </ul> */}
        </div>
      </div>

      {/* el svg */}
      <div className=" z-10 w-full h-20 -mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            // fill="#0099ff"
            className="fill-waves"
            fill-opacity="1"
            d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,106.7C560,117,640,139,720,133.3C800,128,880,96,960,90.7C1040,85,1120,107,1200,101.3C1280,96,1360,64,1400,48L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

function LinkSkill({ skill }) {
  return (
    <li className="min-w-[100px] sm:w-[230px] z-20 rounded-xl flex flex-col justify-center bg-cyan-600 dark:bg-cyan-900 px-10 py-6 items-center">
      {/* <span className="text-[25px] sm:text-[45px] ">{skill.img}</span>{" "} */}
      <img className="w-[25px] sm:w-[45px]" src={skill.img} alt="" />
      <div>
        <span className="text-sm sm:text-xl font-semibold text-white">
          {skill.name}
        </span>
      </div>
    </li>
  );
}
