import React from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import ProjectBody from '../components/ProjectBody';
import Skills from '../components/Skills';
import Work from '../components/Work';

function Project() {
  return (
    <div>
        <Navbar/>
        <ProjectBody
        heading="Projects."
        text ="Some of my most recent Projects"
        />
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Project