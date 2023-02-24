import React from "react";
import { FaReact } from "react-icons/fa";
import { ImFileEmpty } from "react-icons/im";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import TsIcon from "./icons/TsIcon";

type Props = {
  file: { name: string; extension: string };
  hideIcon?: boolean;
};

function File({ file, hideIcon = false }: Props) {
  const getIcon = () => {
    const type = file.extension;
    switch (type) {
      case "html":
        return <IoLogoHtml5 className="text-orange-500" />;
      case "css":
        return <IoLogoCss3 className="text-blue-500" />;
      case "ts":
        return <TsIcon className="text-blue-500" />;
      case "json":
        return <VscJson className="text-yellow-500" />;
      case "tsx":
        return <FaReact className="text-blue-500" />;
      default:
        return <ImFileEmpty />;
    }
  };

  return (
    <div className="flex flex-row items-center space-x-2">
      {getIcon()}
      <div>
        {file.name}.{file.extension}
      </div>
    </div>
  );
}

export default File;
