import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import DisableInspect from "./DisableInspect";
import About from "./components/About";
// import other sections...

export default function App() {
  const [theme, setTheme] = useState("dark");

  // Apply theme to <html> element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={`transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0F172A] text-gray-200"
          : "bg-white text-gray-800"
      }`}
    >
      <DisableInspect/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About/>
      <Services/>
      <Skills />
      <Experience />
      <Contact/>
      <Footer/>
      {/* Add other sections like Service, Contact, etc. */}
    </div>
  );
}
