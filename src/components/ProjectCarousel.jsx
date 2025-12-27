import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import { projectsData } from "../data/projects";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProjectCarousel.css";

export default function ProjectCarousel() {
    // We need to duplicate data if there are few items to ensure the loop works smoothly visually
    // but Swiper's loop mode handles duplication internally if configured right.
    // Ideally for coverflow with loop, we need enough slides. 
    // If we only have 2 projects, we should duplicate them to make it look like "endless".

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        // If fewer than 5 items, duplicate to ensure smooth infinite loop for coverflow
        if (projectsData.length < 5) {
            setSlides([...projectsData, ...projectsData, ...projectsData]);
        } else {
            setSlides(projectsData);
        }
    }, []);

    return (
        <section id="projects" className="py-20 bg-[#0F172A] overflow-hidden relative">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4">
                    My <span className="text-[#F97316]">Projects</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Explore a collection of my recent work, featuring web applications, AI integrations, and responsive designs.
                </p>
            </div>

            <div className="relative w-full max-w-6xl mx-auto px-4">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    initialSlide={1} // Start with the second slide (if duplicated) to be safe, or 0
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -50, // Pull slides closer together
                        depth: 200,
                        modifier: 1.5, // Increase effect intensity
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                    className="mySwiper !pb-16 pt-8"
                >
                    {slides.map((project, index) => (
                        <SwiperSlide
                            key={`${project.id}-${index}`}
                            className="project-slide w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[450px] rounded-xl overflow-hidden border-2 border-gray-700/50 bg-[#1E293B]"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full relative group"
                            >
                                <div className="w-full h-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                                    <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 mb-4 line-clamp-2">{project.description}</p>
                                    <span className="text-[#F97316] text-sm font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                        View Details <FaChevronRight size={12} />
                                    </span>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 z-10 pointer-events-none px-4 lg:px-0 -mt-8">
                    <button className="swiper-button-prev-custom pointer-events-auto w-12 h-12 rounded-full bg-[#1E293B]/80 text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform -translate-x-1/2 lg:-translate-x-full">
                        <FaChevronLeft size={20} />
                    </button>
                    <button className="swiper-button-next-custom pointer-events-auto w-12 h-12 rounded-full bg-[#1E293B]/80 text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform translate-x-1/2 lg:translate-x-full">
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="mt-8 text-center">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#F97316] text-[#F97316] rounded-full font-semibold hover:bg-[#F97316] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                >
                    View All Projects
                </Link>
            </div>
        </section>
    );
}
