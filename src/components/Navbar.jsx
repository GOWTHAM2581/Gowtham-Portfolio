import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "#home", active: true },
    { name: "Service", href: "#service" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
     { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-md bg-[#0F172A]/80 border border-[#1E293B]/60 text-gray-200 rounded-full px-8 py-3 shadow-[0_0_20px_rgba(249,115,22,0.25)] z-[9999] w-[90%] max-w-5xl transition-all duration-300">
      <ul className="flex items-center justify-between gap-6 text-[0.95rem] font-medium tracking-wide">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#F97316] hover:text-white hover:shadow-[0_0_10px_rgba(249,115,22,0.6)] ${
                item.active ? "bg-[#F97316] text-white shadow-[0_0_10px_rgba(249,115,22,0.6)]" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
