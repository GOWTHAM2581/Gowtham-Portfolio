import React, { useState } from "react";
import { SiGithubactions } from "react-icons/si";
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

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "DaisyUI", icon: <SiDaisyui /> },
        { name: "React JS", icon: <FaReact /> },
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
      title: "Version Control & Collaboration",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ];

  const handleHover = (category) => {
    if (activeCategory !== category) {
      setActiveCategory(category);
    }
  };

  const handleLeave = (category) => {
    // Only collapse on hover out if not clicked
    if (activeCategory === category) {
      setActiveCategory(null);
    }
  };

  const handleClick = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

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
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="w-full max-w-5xl border border-[#1E293B]/80 bg-[#1E293B]/50 rounded-xl p-4 hover:bg-[#1E293B]/80 transition-all duration-300"
            onMouseEnter={() => handleHover(category.title)}
            onMouseLeave={() => handleLeave(category.title)}
            onClick={() => handleClick(category.title)}
          >
            {/* Category Header */}
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold text-[#F97316]">
                {category.title}
              </h3>
              <span
                className={`text-sm transition-transform duration-300 ${
                  activeCategory === category.title ? "rotate-90" : "rotate-0"
                }`}
              >
                ▶
              </span>
            </div>

            {/* Skill Icons */}
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4 overflow-hidden transition-all duration-500 ${
                activeCategory === category.title
                  ? "max-h-[400px] opacity-100"
                  : "max-h-0 opacity-0"
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
        ))}
      </div>
    </section>
  );
}
