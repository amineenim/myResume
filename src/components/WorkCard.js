import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function WorkCard(props) {
    const [trimText,setTrimText] = useState(true)
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt="shopping-image"/>
        <h2 className='project-title'>{props.title}</h2>
        <div className={props.description.length > 200 ? 'project-details' : 'project-details-2' } >
            <p>{props.description.length > 200 ? 
            (trimText ? props.description.substring(0,200)+'...' : props.description) 
            : props.description}</p>
            <div className='project-buttons'>
                {props.description.length > 200 ? 
                    (<NavLink to="" className='btn'
                    onClick={() => setTrimText(!trimText) }
                    >
                        {trimText ? 'Show more' : 'Hide'}
                        </NavLink>)
                    : ""
                }
                <NavLink to={props.url} className='btn'>View On Github</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard