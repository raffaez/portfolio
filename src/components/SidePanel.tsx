import React from "react";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import { Disclosure, Transition } from "@headlessui/react";

function SidePanel() {
  return (
    <div className="flex">
      <Disclosure defaultOpen>
        <Sidebar />
        <Transition
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Disclosure.Panel as="span">
            <Explorer />
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
}

export default SidePanel;
