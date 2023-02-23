import React, { useEffect, useState } from "react";
import { VscEllipsis, VscFolder, VscJson } from "react-icons/vsc";
import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import TsIcon from "./icons/TsIcon";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { Disclosure, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { ImFileEmpty } from "react-icons/im";
import { files } from "../common/files-content";
import File from "./File";

function Explorer() {
  const navigate = useNavigate();
  const [path, setPath] = useState(window.location.pathname.split("/")[1]);

  useEffect(() => {
    setPath(window.location.pathname.split("/")[1]);
  }, [navigate]);

  const isActive = (name: string) => {
    return name.split(".")[0] === path;
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
                  <Link
                    to={`/${file.name.split(".")[0]}`}
                    key={file.name}
                    className={`flex pl-7 py-0.5  ${
                      isActive(file.name)
                        ? "bg-purple-450 text-white"
                        : "hover:bg-purple-450 hover:text-purple-200"
                    }`}
                  >
                    <File fileName={file.name} />
                  </Link>
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
