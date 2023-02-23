import "./styles/global.css";

import React from "react";

import BottomBar from "./components/BottomBar";
import Explorer from "./components/Explorer";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <TopBar />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <Explorer />
        <div>conteúdo</div>
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
