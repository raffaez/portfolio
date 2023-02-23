import React from "react";
import Sidebar from "./components/Sidebar";
import Environment from "./components/Environment";
import "./styles/global.css";

function App() {
  return (
    <div className="h-screen w-screen">
      <Environment />
    </div>
  );
}

export default App;
