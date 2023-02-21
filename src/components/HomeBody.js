
import React from 'react';
import './HomeBodyStyle.css';
import intro from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Typed from 'react-typed';

function HomeBody() {
  return (
    <motion.div className='main-content'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration : 0.5}}
    >
        <div className='mask'>
            <img className='intro-img'
            src={intro}
            alt="intro-background"
            />
        </div>
        <div className='my-content'>
            <h2>Hello World!, I'M AMINE MAOURID</h2>
            <motion.h3
            initial={{
              y : "-100vh",
              opacity : 0
            }}
            animate = {{
              y : 0,
              opacity : 1
            }}
            >
                <Typed
                      strings={['Full Stack Developer/Software Enthusiast']}
                      typeSpeed= {160}
                      backSpeed = {60}
                      loop 
                  />
            </motion.h3>
            <motion.div className='buttons-section'
            animate={{
              y : 0,
              opacity : 1
            }}
            initial={{
              y : "-100vh",
              opacity : 0
            }}
            transition={{
              type : "spring",
              stiffness : 60,
              damping : 10
            }}
            >
                <Link to="/contact"
                className='btn'
                >Contact
                </Link>
                <Link to="/projects"
                className='btn-light'>
                Projects
                </Link>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default HomeBody