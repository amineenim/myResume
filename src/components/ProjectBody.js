
import './ProjectBodyStyle.css';
import React from 'react';

function ProjectBody(props) {
  return (
    <div className='project-container'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default ProjectBody