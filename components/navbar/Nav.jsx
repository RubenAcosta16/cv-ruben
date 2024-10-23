"use client";
import { useState, useEffect } from "react";

// import { signOut, useSession } from "next-auth/react";
// import useCurrentUser from "@/hooks/useCurrentUser";

import NavLink from "./NavLink";
import { motion, useAnimate } from "framer-motion";
import { useWindowSize } from "react-use";

import Image from "next/image";

import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa6";

export default function Nav({ handleChangeTheme, currentTheme, setIsActive }) {
  // const { status } = useSession();
  // const { currentUser } = useCurrentUser();

  // console.log(status)

  const iconLi = "size-[22px] m-auto";

  const shadow = { textShadow: "1px 1px 3px rgba(0,0,0,0.7)" };

  // const [navItems, setNavItems] = useState([
  //   {
  //     name: (
  //       <li className={`${itemLi} text-zinc-300`}>
  //         <div className="flex flex-row justify-center items-center gap-[15px]">
  //           <IoLogOutOutline className={`${iconLi}`} />
  //           <span className="hidden inline text-[15px] font-medium">Login</span>
  //         </div>
  //       </li>
  //     ),
  //     link: "/auth/login",
  //     blank: false,
  //   },

  //   {
  //     name: (
  //       <li className={`${itemLi} text-zinc-300`}>
  //         <div className="flex flex-row justify-center text-[15px] items-center gap-[15px]">
  //           Acerca de:
  //         </div>
  //       </li>
  //     ),
  //     link: "https://rubenacosta.vercel.app/",
  //     blank: true,
  //   },
  // ]);

  const navItems = [
    {
      name: "About me",
      link: "#about",
      blank: false,
    },
    {
      name: "Skills",
      link: "#skills",
      blank: false,
    },
    {
      name: "Projects",
      link: "#projects",
      blank: false,
    },
    {
      name: "Contact me",
      link: "#contact",
      blank: false,
    },
  ];

  // useEffect(() => {

  //     if (status === "authenticated") {
  //       setNavItems([
  //         {
  //           name: (
  //             <li className={"inline " + itemLi + " flex-auto"}>
  //               {/* falta img poner al lado*/}
  //               <div className="flex flex-row justify-center items-center gap-[15px]">
  //                 {currentUser.image ? (
  //                   <Image
  //                     src={currentUser.image}
  //                     alt="Image preview"
  //                     width={30}
  //                     height={30}
  //                     className="rounded-full relative object-contain"
  //                   />
  //                 ) : (
  //                   <Image
  //                     src="/default_user.jpg"
  //                     alt="Image preview"
  //                     width={30}
  //                     height={30}
  //                     className="rounded-full relative object-contain"
  //                   />
  //                 )}
  //                 <span className="hidden md:inline text-[15px] line-clamp-1 hover:line-clamp-none" style={shadow}>
  //                   {currentUser.username}
  //                 </span>
  //               </div>
  //             </li>
  //           ),
  //           link: "/editprofile",blank:false
  //         },
  //         {
  //           name: (
  //             <li className={`${itemLi} text-zinc-300`}>
  //               <div className="flex flex-row justify-start items-center gap-[26px]">
  //                 <LuLayoutDashboard className={`${iconLi}  mx-0`} />
  //                 <span className="text-[15px]">Dashboard</span>
  //               </div>
  //             </li>
  //           ),
  //           link: "/dashboard",blank:false
  //         },
  //         {
  //           name: (
  //             <li
  //               className={`${itemLi} flex flex-row justify-start items-center gap-[26px] text-zinc-300`}
  //               // onClick={async () => await signOut()}
  //             >
  //               <IoLogOutOutline className={`${iconLi} mx-0 rotate-180`} />
  //               <span className="text-[15px]">Sign Out</span>
  //             </li>
  //           ),
  //           link: "#",blank:false
  //         },
  //         {
  //           name: (
  //             <li className={`${itemLi} text-zinc-300`}>
  //               <div
  //                 className="flex flex-row justify-center text-[15px] items-center gap-[15px]"
  //               >
  //                 Acerca de:
  //               </div>
  //             </li>
  //           ),
  //           link: "https://rubenacosta.vercel.app/",blank:true
  //         }
  //       ]);
  //     }

  // }, [status]);

  const { width, height } = useWindowSize();
  const [scope, animate] = useAnimate();

  // console.log(width - 44);
  // when its mobile
  const variableRestarMin = 44;
  // when its full
  const variableRestar = 51;

  // 640
  async function animations() {
    if (width <= 640) {
      handleChangeTheme();
    } else {
      await animate(
        scope.current,
        { width: "100%" },
        { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
      );

      // setTheme(currentTheme);
      handleChangeTheme();

      await animate(
        scope.current,
        { width: width / 3 - 7 + "px" },
        { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
      );
    }

    // console.log("si jalaz")
  }

  const menuSlide = {
    enter: (h = height) => ({
      clipPath: `circle(${h * 2 + 200}px at ${
        width <= 640 ? width - variableRestarMin : width / 3 - variableRestar
      }px 40px)`,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    initial: {
      clipPath: `circle(30px at ${
        width <= 640 ? width - variableRestarMin : width / 3 - variableRestar
      }px 40px)`,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      clipPath: `circle(30px at ${
        width <= 640 ? width - variableRestarMin : width / 3 - variableRestar
      }px 40px)`,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };


  function widthDiv() {
    if (width <= 640) {
      return { width: "100%" };
    } else {
      return { width: width / 3 + "px" };
    }
  }

  const btn_mode = {
    initial: { y: -10, opacity: 0 },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: 0.2, type: "spring" },
    }),
    exit: (i) => ({
      y: -10,
      opacity: 0,
      transition: { duration: 0.2, delay: 0.5, type: "spring" },
    }),
  };

  return (
    <motion.div
      ref={scope}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`fixed sm:w-1/3 w-full h-full background-color-nav-btn right-0 top-0 flex flex-col justify-center items-end `}
    >
      <div
        style={widthDiv()}
        className={` flex flex-col justify-center items-center `}
      >
        <ul className="h-1/2 flex flex-col justify-center gap-12 mt-10">
          <motion.button
            onClick={animations}
            className="sm:text-[25px] text-[30px] fill-white absolute right-24 top-[26px]"
            variants={btn_mode}
            initial="initial"
            animate="enter"
            exit="exit"
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          >
            <FiSun
              className={`${iconLi} relative top-[3px] hidden dark:block text-zinc-300 hoverDarkModeIcon`}
            />
            <FaRegMoon
              className={`${iconLi} relative top-[3px] block dark:hidden text-zinc-300 hoverDarkModeIcon`}
            />
          </motion.button>
          <div className="text-slate-400 text-xs relative top-8 border-b border-slate-400 pb-2"></div>

          {navItems.map((navItem, index) => (
            <NavLink
              key={index}
              index={index}
              link={navItem}
              setIsActive={setIsActive}
            ></NavLink>
          ))}

          <div className="relative -top-10 border-b border-slate-400 pb-2"></div>
        </ul>
      </div>
    </motion.div>
  );
}
