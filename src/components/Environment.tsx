import React from "react";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

function Environment() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <TopBar />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <Explorer />
        <div></div>
      </div>
      <BottomBar />
    </div>
  );
}

export default Environment;
