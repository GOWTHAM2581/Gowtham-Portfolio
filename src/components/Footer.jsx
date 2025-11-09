import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-gray-400 text-center py-6 mt-10 border-t border-[#1E293B]">
      <p className="text-sm">
        © {year} <span className="text-[#F97316] font-semibold">Gowtham V</span>. All rights reserved.
      </p>
    </footer>
  );
}
