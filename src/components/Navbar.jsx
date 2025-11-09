import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }, // now styled same as others
  ];

  return (
    <nav
      className="fixed top-3 left-1/2 -translate-x-1/2 backdrop-blur-md border rounded-full px-4 md:px-6 py-2 shadow-md z-[9999] w-[95%] md:w-[88%] max-w-4xl transition-all duration-300 bg-[#0F172A]/80 border-[#1E293B] text-gray-200"
    >
      <ul className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-3 text-sm md:text-[0.9rem] font-medium tracking-wide text-center">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`px-3 py-1.5 rounded-full text-sm md:text-[0.9rem] transition-all duration-300 hover:bg-[#F97316] hover:text-white ${
                item.active
                  ? "bg-[#F97316] text-white shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                  : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}

        {/* Download CV */}
        <li>
          <a
            href="/Gowtham Resume._..pdf"
            download
            className="flex items-center gap-1 bg-[#F97316] text-white px-3 py-1.5 rounded-full text-sm md:text-[0.85rem] hover:opacity-90 transition-all duration-300"
          >
            <FaDownload className="text-sm" />
            <span>CV</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
