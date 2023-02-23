import React from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { BiWindows } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

function TopBar() {
  return (
    <div className="w-screen h-7 bg-purple-700 flex items-center py-1 text-white text-sm">
      <div className="flex space-x-2 items-center basis-1/4 lg:basis-1/3">
        <SiVisualstudiocode className="text-blue-500 mx-3 w-4 h-4" />
        {navItems.map((item) => (
          <div
            key={item}
            className="hidden lg:block rounded-md px-2 hover:bg-purple-450"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex justify-center basis-2/4 lg:basis-1/3">
        Rafaele Souza - Visual Studio Code
      </div>
      <div className="flex justify-end basis-1/4 lg:basis-1/3">
        <FaRegWindowMinimize className="mx-2" />
        <BiWindows className="mx-2" />
        <AiOutlineClose className="mx-2" />
      </div>
    </div>
  );
}

export default TopBar;
