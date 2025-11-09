import React, { useState } from "react";
import { SiGithubactions, SiPostman } from "react-icons/si";
import { TbCloudLock, TbBrandAws, TbDatabase } from "react-icons/tb";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiCanva,
  SiAmazonrds,
  SiAwslambda,
  SiAmazoncloudwatch,
} from "react-icons/si";
import { IoChevronForward } from "react-icons/io5"; // new arrow icon

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React JS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "DaisyUI", icon: <SiDaisyui /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "EC2", icon: <TbBrandAws /> },
        { name: "S3", icon: <TbCloudLock /> },
        { name: "IAM", icon: <TbCloudLock /> },
        { name: "RDS", icon: <SiAmazonrds /> },
        { name: "DynamoDB", icon: <TbDatabase /> },
        { name: "Lambda", icon: <SiAwslambda /> },
        { name: "CloudWatch", icon: <SiAmazoncloudwatch /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "CI/CD", icon: <SiGithubactions /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "UI/UX & Design",
      skills: [
        { name: "Adobe XD", icon: <SiAdobexd /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Canva", icon: <SiCanva /> },
      ],
    },
    {
      title: "Version Control & Collaboration",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  const handleClick = (category) =>
    setActiveCategory((prev) => (prev === category ? null : category));

  return (
    <section
      id="skills"
      className="bg-[#0F172A] text-gray-200 py-16 px-6 md:px-20 transition-all duration-300"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#F97316]">Skills</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Hover or click on a category to explore my technical and design
          skills.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        {skillCategories.map((category, index) => {
          const isActive = activeCategory === category.title;
          const isHovered = hoveredCategory === category.title;

          const isOpen = isActive || isHovered;

          return (
            <div
              key={index}
              className={`w-full max-w-5xl border border-[#1E293B]/80 bg-[#1E293B]/50 rounded-xl p-4 transition-all duration-300 ${
                isOpen ? "shadow-[0_0_20px_rgba(249,115,22,0.3)]" : ""
              }`}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => handleClick(category.title)}
            >
              {/* Header */}
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-[#F97316]">
                  {category.title}
                </h3>

                {/* Animated Chevron */}
                <IoChevronForward
                  className={`text-lg transform transition-all duration-500 ${
                    isOpen
                      ? "rotate-90 text-[#F97316]"
                      : "text-gray-400 group-hover:text-[#F97316]"
                  }`}
                />
              </div>

              {/* Skills */}
              <div
                className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4 overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center bg-[#0F172A] rounded-lg p-3 w-20 h-20 hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300"
                  >
                    <div className="text-xl text-[#F97316] mb-1">
                      {skill.icon}
                    </div>
                    <p className="text-[0.7rem] text-gray-300 text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
