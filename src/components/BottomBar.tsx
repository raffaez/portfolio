import React from "react";
import { VscJson, VscSourceControl } from "react-icons/vsc";
import { Link } from "react-router-dom";

function BottomBar() {
  return (
    <div className="w-screen h-8 bg-purple-600 text-purple-200 flex justify-between px-2">
      <Link
        to="https://github.com/raffaez/portfolio"
        target="_blank"
        className="flex items-center hover:bg-violet-500 px-2 transition"
      >
        <VscSourceControl />
        main*
      </Link>
      <div className="flex items-center hover:bg-violet-500 px-2 space-x-1 transition">
        <VscJson />
        <div>Rafaele Souza</div>
      </div>
    </div>
  );
}

export default BottomBar;
