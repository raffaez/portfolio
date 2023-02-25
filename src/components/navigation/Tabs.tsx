import React from "react";

import { useOpenStore } from "../../store";
import Tab from "./Tab";

function Tabs() {
  const { openFiles } = useOpenStore();

  return (
    <nav className="flex overflow-x-scroll xl:overflow-x-hidden">
      {openFiles.map((file) => (
        <Tab key={file.name} file={file} />
      ))}
    </nav>
  );
}

export default Tabs;
