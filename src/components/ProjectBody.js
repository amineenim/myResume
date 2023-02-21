
import './ProjectBodyStyle.css';
import React from 'react';
import {motion} from 'framer-motion'

function ProjectBody(props) {
  return (
    <motion.div className='project-container'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration : 0.5}}
    >
        <motion.div 
        className='heading'
        initial={{
          y : "-100vh",
          opacity : 0
        }}
        animate={{
          opacity : 1,
          y:0,
          rotate : 360
        }}
        transition={{
          duration : 0.6
        }}
        >
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </motion.div>
    </motion.div>
  )
}

export default ProjectBody