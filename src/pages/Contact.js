import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectBody from '../components/ProjectBody';

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <ProjectBody
        heading="Contact Me"
        text = "let's have a chat"
        />
        <Footer/>
    </div>
  )
}
