import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContentStyle.css'
import developerone from '../assets/devloper1.png'
import developertwo from '../assets/devloper2.jpg'

function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I ?</h1>
            <p>
                I'm a Full Stack Developer, i Create applications with the aim
                of giving Users an intuitive and fluent navigation experience,i
                always seek new skills and keep on date with last technology updates
            </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={developerone} alt="dev-image" className='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={developertwo} alt="dev-image" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent