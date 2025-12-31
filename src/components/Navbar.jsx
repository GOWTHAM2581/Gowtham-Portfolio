import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Service", href: "#service" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "My Projects", href: "/projects", isRoute: true },
    { name: "Contact", href: "#contact" },
  ];

  // ✅ Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = menuItems
        .map((item) => {
          const section = document.querySelector(item.href);
          return section
            ? { name: item.name, offset: section.offsetTop - 100 }
            : null;
        })
        .filter(Boolean);

      const current = offsets
        .reverse()
        .find((item) => scrollY >= item.offset)?.name;

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handle smooth scroll + active update
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (name, href, isRoute) => {
    setActiveSection(name);
    setIsOpen(false);

    // If it's a route (like /projects), navigate directly
    if (isRoute) {
      navigate(href);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      // Determine target element and scroll after navigation
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to allow page load/render
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 backdrop-blur-md border rounded-full px-4 md:px-6 py-2 shadow-md z-[9999] w-[95%] md:w-[88%] max-w-4xl transition-all duration-300 bg-[#0F172A]/80 border-[#1E293B] text-gray-200">
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-between gap-4 text-sm md:text-[0.9rem] font-medium tracking-wide">
        {menuItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => handleClick(item.name, item.href, item.isRoute)}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 ${activeSection === item.name
                ? "bg-[#F97316] text-white shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                : "hover:bg-[#F97316]/80 hover:text-white"
                }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#F97316] text-xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-[#0F172A]/95 backdrop-blur-md border border-[#1E293B] rounded-xl py-4 flex flex-col items-center gap-4 md:hidden transition-all duration-300">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleClick(item.name, item.href, item.isRoute)}
                className={`block w-full text-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.name
                  ? "bg-[#F97316] text-white"
                  : "hover:bg-[#F97316]/80 hover:text-white"
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
