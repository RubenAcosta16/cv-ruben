import Image from "next/image";

export default function projectLink({ project }) {
  const widthImg = 350;
  const widthClass = "w-[" + widthImg + "px]";
  const heightImg = (9 * widthImg) / 16;
  return (
    <li
      className={`flex flex-col gap-5 w-[350px] h-[310px] rounded-lg  bg-white`}
      style={{ boxShadow:"13px 15px  rgb(14 116 144)" }}

    >
      <Image
        className=""
        style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
        src={project.img}
        alt={project.name}
        width={widthImg}
        //   9*medida/16
        height={heightImg}
      ></Image>
      <div className="px-4">
        <p className=" text-xl text-black font-bold">{project.name}</p>
        {/* hacer que cuando le de click me muestre el resto del texto */}
        <p
          className={`line-clamp-3 text-stone-700 text-md font-normal max-w-[${widthImg}]`}
        >
          {project.description}
        </p>
      </div>
    </li>
  );
}
