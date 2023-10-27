import Image from "next/image";

export default function projectLink({project}) {

    const widthImg=350
    const widthClass="w-["+widthImg+"px]"
    const heightImg=9*widthImg/16
  return (
    <li
            className={`flex flex-col gap-5 w-[350px] h-[310px] border border-gray-700 rounded-lg bg-white`}
          >
            <Image
              className="rounded-lg"
              src={project.img}
              alt={project.name}
              width={widthImg}
              //   9*medida/16
              height={heightImg}
            ></Image>
            <span className="mx-2 text-xl text-black font-bold">{project.name}</span>
            {/* hacer que cuando le de click me muestre el resto del texto */}
            <span className={`line-clamp-3 mx-2 text-md font-normal max-w-[${widthImg}]`}>{project.description}</span>
          </li>
  )
}
