import ProjectLink from "./projectLink";

import './projects.css'

const arrProjects = [
  {
    name: "Amazon 2.0",
    description:
      "This is a page imitating the amazon website, including payments, global status usage and login.",
    img: "/project-1.png",
  },
  {
    name: "Amazon 2.0",
    description:
      "This is a page imitating the amazon website, including payments, global status usage and login.",
    img: "/project-1.png",
  },
  {
    name: "Amazon 2.0",
    description:
      "This is a page imitating the amazon website, including payments, global status usage and login.",
    img: "/project-1.png",
  },
  {
    name: "Amazon 2.0",
    description:
      "This is a page imitating the amazon website, including payments, global status usage and login.",
    img: "/project-1.png",
  },
  {
    name: "Amazon 2.0",
    description:
      "This is a page imitating the amazon website, including payments, global status usage and login.",
    img: "/project-1.png",
  },
];

export default function projects() {
  return (
    <div className="p-12 pt-32 pb-44 flex flex-col backgroundCross relative -top-28">
      {/* usar next ui para el carousel */}
      <h1 className="text-[56px] font-extrabold text-center mb-16 text-black relative z-20">
        Projects
      </h1>
      <div className="flex-center">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          {arrProjects.map((project, index) => (
            <ProjectLink key={index} project={project}></ProjectLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
