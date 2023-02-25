import "./styles/global.css";

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import BottomBar from "./components/BottomBar";
import SidePanel from "./components/SidePanel";
import TopBar from "./components/TopBar";
import About from "./panels/About";
import Contact from "./panels/Contact";
import Education from "./panels/Education";
import Index from "./panels/Index";
import Projects from "./panels/Projects";
import Skills from "./panels/Skills";
import Tabs from "./components/Tabs";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex flex-col">
        <TopBar />
        <div className="w-screem flex flex-row flex-grow z-0 bg-purple-500">
          <SidePanel />
          <div className="min-w-[calc(100vw-20rem)] max-w-[calc(100vw-3rem)] flex flex-col">
            <Tabs />
            <Routes>
              <Route path="/index" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/index" />} />
            </Routes>
          </div>
        </div>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
