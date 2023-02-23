import React from "react";
import { VscEllipsis, VscFolder, VscJson } from "react-icons/vsc";
import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import TsIcon from "./icons/TsIcon";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { Disclosure, Transition } from "@headlessui/react";

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
    <div className="flex flex-col h-full w-64 bg-purple-600 text-purple-300">
      <div className="flex flex-row justify-between p-3">
        <div className="uppercase">Explorer</div>
        <VscEllipsis />
      </div>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center bg-purple-700">
              <HiChevronRight
                className={`mx-1 ${
                  open ? "rotate-90" : "rotate-0"
                } transform transition duration-200 ease-in-out`}
              />
              <div className="uppercase font-bold">Portfolio</div>
            </Disclosure.Button>
            <Transition
              appear={true}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel>
                {files.map((file) => (
                  <div
                    key={file.name}
                    className={`flex flex-row items-center pl-7 py-0.5 space-x-2 cursor-pointer hover:bg-purple-450 hover:text-purple-200 ${
                      isActive(file.name) && "bg-purple-450 text-white"
                    }`}
                  >
                    <div className={`${file.color}`}>{file.icon}</div>
                    <div>{file.name}</div>
                  </div>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Explorer;
