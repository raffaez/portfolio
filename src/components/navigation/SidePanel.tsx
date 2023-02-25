import { Disclosure, Transition } from "@headlessui/react";
import React from "react";

import Explorer from "./Explorer";
import SideBar from "./SideBar";

function SidePanel() {
  return (
    <div className="flex">
      <div className="flex border-r-[1px] border-purple-600">
        <SideBar />
      </div>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-75"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Disclosure.Panel as="span">
          <Explorer />
        </Disclosure.Panel>
      </Transition>
    </div>
  );
}

export default SidePanel;
