import { Disclosure } from "@headlessui/react";
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

function Sidebar() {
  return (
    <div className="w-12 bg-purple-500 flex flex-col items-center">
      <Disclosure.Button className="w-12">
        <VscFiles className="sidebar-icon bg-purple-600 border-purple-400 text-white" />
      </Disclosure.Button>
      <VscSearch className="sidebar-icon" />
      <VscSourceControl className="sidebar-icon" />
      <VscDebugAlt className="sidebar-icon" />
      <VscExtensions className="sidebar-icon" />
      <VscAccount className="sidebar-icon mt-auto" />
      <VscGear className="sidebar-icon" />
    </div>
  );
}

export default Sidebar;
