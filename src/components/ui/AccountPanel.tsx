import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";

function AccountPanel() {
  return (
    <div className="flex flex-col rounded-md bg-purple-700">
      <Link
        to="https://www.linkedin.com/in/rafaele-souza/"
        target="_blank"
        className=" p-1 justify-between border-b-[1px] border-purple-300 text-white"
      >
        <div className="flex items-center justify-between px-1 rounded-md hover:bg-purple-200/10 transition">
          <div className="flex items-center space-x-2">
            <FaLinkedinIn />
            <h3>LinkedIn (Rafaele Souza)</h3>
          </div>
          <HiChevronRight />
        </div>
      </Link>

      <Link
        to="https://github.com/raffaez"
        target="_blank"
        className=" p-1 justify-between text-white"
      >
        <div className="flex items-center justify-between px-1 rounded-md hover:bg-purple-200/10 transition">
          <div className="flex items-center space-x-2">
            <VscGithubAlt />
            <h3>GitHub (raffaez)</h3>
          </div>
          <HiChevronRight />
        </div>
      </Link>
    </div>
  );
}

export default AccountPanel;
