import "./styles/global.css";

import React from "react";

import BottomBar from "./components/BottomBar";
import Explorer from "./components/Explorer";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import { Disclosure, Transition } from "@headlessui/react";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <TopBar />
      <div className="flex flex-row flex-grow z-0">
        <SidePanel />
        <div>conteúdo</div>
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
