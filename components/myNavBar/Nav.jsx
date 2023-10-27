import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

const navItems = [
  { name: "About me", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Contact me", link: "/contact" },
];

export default function Nav() {
  // 640

  const { width, height } = useWindowSize();

  console.log(width-44)

  const menuSlide = {
    enter: (h = height) => ({
      clipPath: `circle(${h * 2 + 200}px at ${
        width <= 640 ? width - 60 : width / 3 - 50
      }px 40px)`,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    initial: {
      clipPath: `circle(30px at ${
        width <= 640 ? width - 60 : width / 3 - 50
      }px 40px)`,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      clipPath: `circle(30px at ${
        width <= 640 ? width - 60 : width / 3 - 50
      }px 40px)`,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  // transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1]

  // console.log(width)

  // console.log(widthScreen)
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`fixed sm:w-1/3 w-full h-full background-color-nav right-0 top-0 flex justify-center items-center `}
    >
      <ul className="h-1/2 flex flex-col justify-center gap-14 mt-10">
        <div className="text-slate-400 text-xs relative top-8 border-b border-slate-400 pb-2"></div>

        {navItems.map((navItem, index) => (
          <NavLink key={index} index={index} link={navItem}></NavLink>
        ))}

        <div className="relative -top-10 border-b border-slate-400 pb-2"></div>
      </ul>
    </motion.div>
  );
}
