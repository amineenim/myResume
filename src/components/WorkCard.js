import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function WorkCard(props) {
    const [trimText,setTrimText] = useState(true)
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt="shopping-image"/>
        <h2 className='project-tile'>{props.title}</h2>
        <div className='project-details'>
            <p>{props.description.length > 260 ? 
            (trimText ? props.description.substring(0,260)+'...' : props.description) 
            : props.description}</p>
            <div className={props.description.length > 260 ? 'project-buttons' : 'project-buttons-2'}>
                {props.description.length > 260 ? 
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