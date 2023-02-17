import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectBody from '../components/ProjectBody';
import Form from '../components/Form';

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <ProjectBody
        heading="Contact Me"
        text = "let's have a chat"
        />
        <Form/>
        <Footer/>
    </div>
  )
}
