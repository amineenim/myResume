
import React from 'react';
import './HomeBodyStyle.css';
import intro from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

function HomeBody() {
  return (
    <div className='main-content'>
        <div className='mask'>
            <img className='intro-img'
            src={intro}
            alt="intro-background"
            />
        </div>
        <div className='my-content'>
            <h2>Hello World!, I'M AMINE MAOURID</h2>
            <h3>Full Stack Developer/Software Enthusiast</h3>
            <div className='buttons-section'>
                <Link to="/contact"
                className='btn'
                >Contact
                </Link>
                <Link to="/projects"
                className='btn-light'>
                Projects
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeBody