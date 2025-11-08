import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";


function App() {
  return (
    <Fragment>
        <Navbar/>
        <Hero/>
        <Services/>
        <Skills/>
    </Fragment>
  );
}

export default App;
