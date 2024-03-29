
import React from 'react';
import './SkillsStyle.css';
import { motion } from 'framer-motion';
import php from '../assets/skills/php.png'
import laravel from '../assets/skills/laravel.png'
import react from '../assets/skills/react.png';
import js from '../assets/skills/js.png';
import html from '../assets/skills/html.jpg'
import css from '../assets/skills/css.webp'
import bootstrap from '../assets/skills/bootstrap.png'
import angular from '../assets/skills/angular.png'
import swift from '../assets/skills/swift.svg'
import node from '../assets/skills/node.webp'
import docker from '../assets/skills/docker.webp'


export default function Skills() {
  return (
    <div className='skills'>
        <h2>Skills and Tools</h2>
        <div className='skills-container'>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}
            >
                <div className='logo-container'>
                    <img src={php} alt="php mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>PHP</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={laravel} alt="laravel mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>Laravel</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={react} alt="react mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>React</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={js} alt="javascript mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>Javascript</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={docker} alt="docker mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>Docker</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={html} alt="html mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>HTML 5</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={css} alt="css mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>CSS 3</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={bootstrap} alt="bootstrap mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>Bootstrap</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={angular} alt="angular mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>Angular</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={swift} alt="swift mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>Swift</h4>
            </motion.div>
            <motion.div className='skill'
            whileHover={{scale : 1.1}}>
                <div className='logo-container'>
                    <img src={node} alt="node mascot" 
                    className='logo'/>
                </div>
                <span className='bar'></span>
                <h4>Node Js</h4>
            </motion.div>
        </div>
    </div>
  )
}
