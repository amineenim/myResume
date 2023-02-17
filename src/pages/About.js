import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBody from '../components/ProjectBody';
import AboutContent from '../components/AboutContent';

function About() {
  return (
    <div>
        <Navbar/>
        <ProjectBody
        heading="About Me"
        text="Full Stack Developer"
        />
        <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About