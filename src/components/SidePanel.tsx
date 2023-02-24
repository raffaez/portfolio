import React from "react";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import { Disclosure, Transition } from "@headlessui/react";
import { useMediaQuery } from "@react-hook/media-query";

function SidePanel() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const defaultOpen = !isMobile;

  return (
    <div className="flex">
      <Disclosure defaultOpen={defaultOpen}>
        <Sidebar />
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
      </Disclosure>
    </div>
  );
}

export default SidePanel;
