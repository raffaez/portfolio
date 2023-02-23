import React from "react";
import { VscEllipsis, VscFolder, VscJson } from "react-icons/vsc";
import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import TsIcon from "./icons/TsIcon";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

const files = [
  {
    name: "index.html",
    icon: <IoLogoHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "about.css",
    icon: <IoLogoCss3 />,
    color: "text-blue-500",
  },
  {
    name: "education.ts",
    icon: <TsIcon />,
    color: "text-blue-500",
  },
  {
    name: "skills.json",
    icon: <VscJson />,
    color: "text-yellow-500",
  },
  {
    name: "projects.ts",
    icon: <TsIcon />,
    color: "text-blue-500",
  },
  {
    name: "contact.tsx",
    icon: <FaReact />,
    color: "text-blue-500",
  },
];

function Explorer() {
  const path = window.location.pathname.split("/")[1];

  const isActive = (name: string) => {
    return name === path;
  };

  return (
    <div className="hidden md:flex flex-col h-full w-64 bg-purple-600 text-purple-300">
      <div className="flex flex-row justify-between p-3">
        <div className="uppercase">Explorer</div>
        <VscEllipsis />
      </div>
      <div className="flex items-center bg-purple-700">
        <HiChevronDown className="inline mx-1" />
        <div className="uppercase font-bold">Portfolio</div>
      </div>
      <div className="">
        {files.map((file) => (
          <div
            key={file.name}
            className={`flex flex-row items-center pl-6 py-0.5 space-x-2 cursor-pointer hover:bg-purple-450 hover:text-purple-200 ${
              isActive(file.name) && "bg-purple-450 text-white"
            }`}
          >
            <div className={`${file.color}`}>{file.icon}</div>
            <div>{file.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorer;
