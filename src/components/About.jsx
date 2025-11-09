import React from "react";
import aboutImg from "/aboutme.png"; 

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 md:px-20 bg-[#0F172A] text-gray-200 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 text-center md:text-left">
        {/* Left - Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:scale-105 transition-transform duration-500">
            <img
              src={aboutImg}
              alt="About Me"
              className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 object-cover object-top"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col justify-center md:w-2/3 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-[#F97316]">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-[0.95rem] md:text-base mb-4">
            I am a passionate{" "}
            <span className="text-[#F97316] font-semibold">
              Computer Science and Engineering Graduate
            </span>{" "}
            from <span className="font-semibold">SNS College of Technology</span>, Coimbatore, with a CGPA of{" "}
            <span className="text-[#F97316] font-semibold">8.7</span>. During my academic journey, I gained strong
            fundamentals in{" "}
            <span className="font-medium">
              Data Structures, Algorithms, Database Management, Web Technologies,
            </span>{" "}
            and <span className="font-medium">Software Development Life Cycle</span>. My learning approach has always been
            hands-on — focusing on building real-world projects to bridge theory and practice.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            Throughout my studies, I worked on multiple academic and personal projects that deepened my understanding of{" "}
            <span className="font-medium">full-stack web development, cloud computing,</span> and{" "}
            <span className="font-medium">UI/UX design</span>. I love transforming complex ideas into intuitive, scalable,
            and visually engaging digital experiences.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I’m deeply passionate about{" "}
            <span className="text-[#F97316] font-semibold">
              creating digital experiences that combine logic and design.
            </span>{" "}
            What drives me is solving real-world problems through clean code, efficient systems, and thoughtful design. I
            believe the best products are built where{" "}
            <span className="font-medium">creativity, structure, and user empathy</span> meet.
          </p>

          <a
            href="#contact"
            className="bg-[#F97316] text-white px-5 py-2.5 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-300 mx-auto md:mx-0 w-fit"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
