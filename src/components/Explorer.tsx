import { Disclosure, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { HiChevronRight } from "react-icons/hi2";
import { VscEllipsis } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";

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
      <div className="flex flex-row justify-between py-2 px-6">
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
              <div className="uppercase font-bold">Rafaele Souza</div>
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
                <Disclosure defaultOpen>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center space-x-1 pl-5 w-full hover:bg-purple-450 hover:text-purple-200">
                        <HiChevronRight
                          className={`${
                            open ? "rotate-90" : "rotate-0"
                          } transform transition duration-200 ease-in-out`}
                        />
                        {open ? <FcOpenedFolder /> : <FcFolder />}
                        <div className="">portfolio</div>
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
                              className={`flex pl-10 py-0.5  ${
                                isActive(file.name)
                                  ? "bg-purple-450 text-white"
                                  : "hover:bg-purple-450 hover:text-purple-200"
                              }`}
                            >
                              <File file={file} />
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Explorer;
