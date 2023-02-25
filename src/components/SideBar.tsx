import { Disclosure, Popover } from "@headlessui/react";
import React from "react";
import {
  VscAccount,
  VscDebugAlt,
  VscExtensions,
  VscFiles,
  VscGear,
  VscSearch,
  VscSourceControl,
} from "react-icons/vsc";

import AccountPanel from "./AccountPanel";

function SideBar() {
  return (
    <div className="w-12 bg-purple-500 flex flex-col items-center relative">
      <Disclosure.Button className="w-12">
        {({ open }) => (
          <VscFiles
            className={`sidebar-icon ${
              open &&
              "text-white bg-purple-600 border-l-[1px] border-purple-300"
            }`}
          />
        )}
      </Disclosure.Button>
      <VscSearch className="sidebar-icon" />
      <VscSourceControl className="sidebar-icon" />
      <VscDebugAlt className="sidebar-icon" />
      <VscExtensions className="sidebar-icon" />
      <Popover as="span" className=" mt-auto">
        {({ open }) => (
          <>
            <Popover.Button className="focus:outline-none focus-visible:ring-0">
              <VscAccount
                className={`sidebar-icon w-12 h-12 ${open && "text-white"}`}
              />
            </Popover.Button>
            <Popover.Panel>
              <div className="absolute w-64 h-fit -right-64 bottom-14">
                <AccountPanel />
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <VscGear className="sidebar-icon" />
    </div>
  );
}

export default SideBar;
