import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import ProjectCarousel from "./ProjectCarousel";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
// Services was commented out in App.jsx, keeping it optional

export default function Home({ theme, setTheme }) {
    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
            <About />
            <ProjectCarousel />
            {/* Services component is available if needed */}
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}
