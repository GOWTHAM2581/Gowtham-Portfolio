import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive, clean, and user-friendly interfaces focused on great experiences.",
      image: "/uiux.png", // place your image in public folder
    },
    {
      title: "Web Design",
      description:
        "Designing modern, responsive websites with creative layouts and seamless interactions.",
      image: "/webd.jpg",
    },
    {
      title: "Full Stack Development",
      description:
        "Building complete end-to-end web solutions using MERN stack with optimized performance.",
      image: "/fulls.jpg",
    },
  ];

  return (
    <section
      id="service"
      className="bg-[#0F172A] text-gray-200 py-20 px-6 md:px-20"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#F97316]">Services</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          I provide a complete range of design and development services focused
          on crafting visually appealing and performance-driven products.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#1E293B]/80 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] transition-all duration-500 group w-[320px] md:w-[340px]"
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover object-center rounded-t-2xl group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Text Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Hover Arrow Icon */}
            <div className="absolute bottom-5 right-5 bg-[#F97316] text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
              <FaArrowUpRightFromSquare />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
