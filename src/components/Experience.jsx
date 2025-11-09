import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Prime Solution",
      period: "Jun 2023 - Jul 2023",
      role: "Web Developer Intern",
      description:
        "Developed responsive user interfaces using React and Tailwind CSS, improving user interaction and accessibility.",
    },
    {
      company: "Fifty Web Technology",
      period: "May 2024 - Jun 2024",
      role: "Backend Developer Intern",
      description:
        "Built and tested RESTful APIs with Node.js and Express, ensuring efficient data handling and smooth integration.",
    },
    {
      company: "River World Technology",
      period: "Aug 2025 - Sep 2025",
      role: "Software Engineer Intern",
      description:
        "Assisted in developing scalable web solutions and automation tools using JavaScript and AWS cloud services.",
    },
    {
      company: "River World Technology",
      period: "Oct 2025 - Present",
      role: "Software Engineer",
      description:
        "Leading full-stack development initiatives integrating robust APIs, secure cloud deployments, and modern UI designs.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#0F172A] text-gray-200 py-16 px-4 sm:px-8 md:px-20 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#F97316]">Work Experience</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          A timeline of my professional journey showcasing growth across
          development and engineering roles.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-2 border-dashed border-[#F97316]/60"></div>

        <div className="space-y-12 w-full">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
            >
              {/* Left Side - Company & Date */}
              <div className="md:w-[45%] text-right pr-6 md:pr-10">
                <h3 className="text-lg font-semibold text-white">
                  {exp.company}
                </h3>
                <p className="text-gray-400 text-sm">{exp.period}</p>
              </div>

              {/* Middle Dot */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-5 h-5 rounded-full border-4 ${
                    index % 2 === 0
                      ? "border-[#F97316] bg-[#0F172A]"
                      : "border-[#0F172A] bg-[#F97316]"
                  }`}
                ></div>
              </div>

              {/* Right Side - Role & Description */}
              <div className="md:w-[45%] text-left pl-6 md:pl-10">
                <h3 className="text-lg font-semibold text-[#F97316]">
                  {exp.role}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
