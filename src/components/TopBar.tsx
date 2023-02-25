import React, { useEffect, useState } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { BiWindows } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { files } from "../common/files-content";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const path = window.location.pathname.split("/")[1];
    const file = files.find((file) => file.name.split(".")[0] === path);
    if (file) {
      setFileName(`${file.name}.${file.extension}`);
    }
  }, [navigate]);

  return (
    <div className="w-screen h-7 bg-purple-700 flex items-center py-1 text-white text-sm">
      <div className="flex space-x-2 items-center basis-1/4 lg:basis-1/3">
        <SiVisualstudiocode className="text-blue-500 mx-3 w-4 h-4" />
        {navItems.map((item) => (
          <div
            key={item}
            className="hidden lg:block rounded-md px-1.5 hover:bg-purple-450"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex justify-center basis-2/4 lg:basis-1/3 text-xs">
        {fileName} - Visual Studio Code
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
