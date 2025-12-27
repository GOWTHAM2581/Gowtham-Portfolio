import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProjects from "./pages/AllProjects";
import DisableInspect from "./DisableInspect";

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

  // Pass theme props to pages so they can pass to Navbar if needed
  // Note: AllProjects manages its own Navbar or we can wrap a Layout.
  // For now, AllProjects has a specific implementation.

  return (
    <Router>
      <div
        className={`transition-colors duration-500 ${theme === "dark"
          ? "bg-[#0F172A] text-gray-200"
          : "bg-white text-gray-800"
          }`}
      >
        {/* <DisableInspect /> */}
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}
