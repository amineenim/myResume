
import React from 'react';
import './WorkStyle.css';
import WorkCard from './WorkCard';
import ProjectData from './ProjectsData'

function Work() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='projectt-container'>
            {
                ProjectData.map(
                    (value,index) => {
                        return (
                            <WorkCard
                            key={index}
                            imgsrc = {value.imgsrc}
                            description = {value.description}
                            url = {value.url}
                            />
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Work