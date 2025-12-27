import React, { useState } from "react";
import { projectsData } from "../data/projects";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SubmarineAnimation from "../components/SubmarineAnimation";
import { FaArrowLeft } from "react-icons/fa";

export default function AllProjects() {
    const [activeTab, setActiveTab] = useState("All Projects");

    const categories = [
        "All Projects",
        "Gen AI",
        "Full Stack",
        "Frontend",
        "Figma Design",
    ];

    const filteredProjects = activeTab === "All Projects"
        ? projectsData
        : projectsData.filter(project => project.categories?.some(cat => cat.toLowerCase() === activeTab.toLowerCase()));

    // Check if we should show the "Coming Soon" animation
    // If filtering returns empty, we assume it's coming soon.
    const showComingSoon = filteredProjects.length === 0;

    return (
        <div className="min-h-screen bg-[#0F172A] text-gray-200 flex flex-col font-sans">
            {/* Top Bar with Back Button */}
            <div className="pt-8 px-4 sm:px-8 md:px-20">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[#F97316] hover:text-orange-300 transition-colors font-semibold px-4 py-2 border border-[#F97316] rounded-full hover:bg-[#F97316]/10"
                >
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>

            <main className="flex-grow py-8 px-4 sm:px-8 md:px-20">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            All <span className="text-[#F97316]">Projects</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Explore a collection of my work in web development and AI, categorized by domain.
                        </p>
                    </div>

                    {/* Category Navigation Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === category
                                    ? "bg-[#F97316] text-white shadow-[0_0_15px_rgba(249,115,22,0.5)] scale-105"
                                    : "bg-[#1E293B] text-gray-400 hover:text-white hover:bg-[#334155]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    {showComingSoon ? (
                        <SubmarineAnimation category={activeTab} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                            {filteredProjects.map((project) => (
                                <a
                                    key={project.id}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50 flex flex-col"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#1E293B] to-transparent opacity-80"></div>

                                        {/* Category Badge overlay */}
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            {project.categories?.slice(0, 2).map((cat, idx) => (
                                                <span key={idx} className="bg-[#0F172A]/80 backdrop-blur-sm text-[#F97316] text-xs font-bold px-3 py-1 rounded-full border border-[#F97316]/30">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 relative flex-grow flex flex-col">
                                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F97316] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed mb-6 text-sm flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto flex items-center text-sm font-medium text-[#F97316] group-hover:translate-x-1 transition-transform">
                                            View Project <span className="ml-1">→</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}

                </div>
            </main>

            <Footer />

            <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
        </div>
    );
}
