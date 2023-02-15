import React from 'react';
import './FooterStyle.css';
import {FaPhone,FaHome,FaMailBulk, FaFacebook, FaInstagram, FaGithub, FaDiscord} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <h4>
                        <FaHome size={20}
                        style={{color : "white", marginRight : "2rem"}}
                        />
                        Corte, France
                    </h4>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20}
                        style={{color : "white", marginRight : "2rem"}}
                        />
                        +(33) 7-51-48-49-23
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} 
                        style = {{color: "white", marginRight:"2rem"}}
                        />
                        aminemaourid1995@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>A little bit about Me</h4>
                <p>This is Me Amine MAOURID, Software Enthusiat
                    and full-stack Developer with solid background
                    skills, Adaptable and always learning new technologies,
                    I enjoy coding and discussing new projetcs and design
                    challenges.
                </p>
                <div className='social'>
                    <FaFacebook size={30}
                    style={{color:"white", marginRight : "1rem"}}
                    />
                    <FaInstagram size={30}
                    style={{color : "white", marginRight : "1rem"}}
                    />
                    <FaGithub size={30}
                    style={{color : "white", marginRight : "1rem"}}
                    />
                    <FaDiscord size={30} 
                    style = {{color : "white",marginRight : "1rem"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer