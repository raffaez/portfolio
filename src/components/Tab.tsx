import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import { useOpenStore } from "../store";
import File from "./File";

type Props = {
  file: { name: string; extension: string };
};

function Tab({ file }: Props) {
  const navigate = useNavigate();
  const [path, setPath] = useState(window.location.pathname.split("/")[1]);
  const [active, setActive] = useState(true);
  const { openFiles } = useOpenStore();

  useEffect(() => {
    setPath(window.location.pathname.split("/")[1]);
  }, [navigate]);

  useEffect(() => {
    setActive(file.name === path);
  }, [path]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const nextIndex =
      openFiles.findIndex((f: { name: string }) => f.name === file.name) + 1;

    const nextName = openFiles[nextIndex]
      ? openFiles[nextIndex].name
      : openFiles[nextIndex - 2]
      ? openFiles[nextIndex - 2].name
      : "";

    useOpenStore.setState({
      openFiles: openFiles.filter(
        (f: { name: string }) => f.name !== file.name
      ),
    });

    if (active) navigate(`/${nextName}`);
  };

  return (
    <Link
      to={`/${file.name}`}
      className={`group flex items-center space-x-2 py-2 pl-4 pr-2 border-r-[1px] border-b-[1px] cursor-pointer border-purple-500 bg-purple-450 text-purple-300 ${
        active && "border-b-yellow-500 bg-purple-600 text-white"
      }`}
    >
      <File file={file} />
      <button
        className="p-0.5 hover:bg-purple-200/10 rounded-md"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClose(e)}
      >
        <IoClose
          className={`opacity-0 group-hover:opacity-100 ${
            active && "opacity-100"
          }`}
        />
      </button>
    </Link>
  );
}

export default Tab;
