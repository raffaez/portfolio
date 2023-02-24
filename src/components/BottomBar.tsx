import { Popover } from "@headlessui/react";
import React from "react";
import { VscJson, VscSourceControl } from "react-icons/vsc";
import { Link } from "react-router-dom";

import AccountPanel from "./AccountPanel";

function BottomBar() {
  return (
    <div className="w-screen h-8 bg-purple-600 text-purple-200 flex justify-between px-2 relative">
      <Link
        to="https://github.com/raffaez/portfolio"
        target="_blank"
        className="flex items-center hover:bg-violet-500 px-2 transition"
      >
        <VscSourceControl />
        main*
      </Link>
      <Popover as="div">
        {({ open }) => (
          <>
            <Popover.Button className="h-full focus:outline-none focus-visible:ring-0">
              <div
                className={`h-full flex items-center hover:bg-violet-500 px-2 space-x-1 transition ${
                  open && "bg-violet-500"
                }`}
              >
                <VscJson />
                <div>Rafaele Souza</div>
              </div>
            </Popover.Button>
            <Popover.Panel>
              <div className="absolute w-64 h-fit right-2 bottom-10">
                <AccountPanel />
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
}

export default BottomBar;
