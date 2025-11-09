import React from "react";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-[#0F172A] text-gray-200 px-4 sm:px-6 md:px-20 pt-16 md:pt-24 gap-6 md:gap-16"
    >
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start gap-4 max-w-md text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Gowtham V
        </h1>

        {/* Animated Designation */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#F97316]">
          <TypeAnimation
            sequence={[
              "UI/UX Designer",
              2000,
              "Web Designer",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h2>

        {/* Short Description */}
        <p className="text-gray-400 leading-relaxed text-sm sm:text-[0.95rem] md:text-base px-2 sm:px-0">
          I’m a passionate designer and developer who blends clean UI design
          with solid full-stack development to build modern digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6 w-full">
          <a
            href="#contact"
            className="bg-[#F97316] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]"
          >
            Hire Me
          </a>
          <a
            href="/Gowtham Resume._..pdf"
            download
            className="border border-[#F97316] text-[#F97316] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#F97316] hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]"
          >
            <FaDownload className="inline mr-2" /> Download CV
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#F97316]/70 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:scale-105 transition-transform duration-500">
          <img
            src="/Hero.png"
            alt="Gowtham V"
            className="w-56 sm:w-64 md:w-[380px] rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.3)] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
