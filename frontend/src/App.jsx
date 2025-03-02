
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/Navbar/MainLayout";
import { ThemeProvider } from "./theme/Theme-Provider";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Resource from "./pages/Resource";
import About from "./pages/About";
import Explore from "./pages/Explore";
import FAQ from "./pages/FAQ";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

function App() {
  // Cloudinary setup
  const cld = new Cloudinary({ cloud: { cloudName: 'dr9rbgcct' } });

  const img = cld
    .image("cld-sample-5")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="nexus-theme">
        <MainLayout />
        <div className="flex justify-center my-4">
          <AdvancedImage cldImg={img} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/project" element={<Project />} />
          <Route path="/help" element={<FAQ />} />
        </Routes>
      </ThemeProvider>
    </React.StrictMode>
  );
export default App