import "./styles/global.css";

import { Disclosure } from "@headlessui/react";
import { useMediaQuery } from "@react-hook/media-query";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import BottomBar from "./components/navigation/BottomBar";
import Empty from "./components/ui/Empty";
import TopBar from "./components/ui/TopBar";
import About from "./panels/About";
import Contact from "./panels/Contact";
import Education from "./panels/Education";
import Index from "./panels/Index";
import Projects from "./panels/Projects";
import Skills from "./panels/Skills";
import SidePanel from "./components/navigation/SidePanel";
import Tabs from "./components/navigation/Tabs";

function App() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const defaultOpen = !isMobile;

  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex flex-col">
        <TopBar />
        <div className="w-screem flex flex-row flex-grow z-0 bg-purple-500">
          <Disclosure defaultOpen={defaultOpen}>
            {({ open }) => (
              <>
                <SidePanel />
                <div
                  className={`${
                    open ? "w-[calc(100vw-20rem)]" : "w-[calc(100vw-3rem)]"
                  } flex flex-col flex-grow`}
                >
                  <Tabs />
                  <Routes>
                    <Route path="/" element={<Empty />} />
                    <Route path="/index" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </div>
              </>
            )}
          </Disclosure>
        </div>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
