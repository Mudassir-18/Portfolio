import React from 'react'
import './Projectslist.css'
import { useEffect } from 'react';
const Projectslist = () => {
    useEffect(() => {
        // Update CSS classes on page load
        const elements = document.querySelectorAll('#element');
         elements.forEach(element => {
        element.classList.add('loaded');
    });
      }, []);
  return (
    <div className="projectslist-maindiv">
        <div className="projectslist-subdiv" id='element'>
            <h1 id="project-title">
                Projects will be upload Soon
            </h1>
        </div>
        <div className="projectslist-subdiv" id='element'>
            <h1 id="project-title">
                Projects will be upload Soon
            </h1>
        </div>
        <div className="projectslist-subdiv"id='element'>
            <h1 id="project-title">
                Projects will be upload Soon
            </h1>
        </div>
        <div className="projectslist-subdiv" id='element'>
            <h1 id="project-title">
                Projects will be upload Soon
            </h1>
        </div>
        <div className="projectslist-subdiv" id='element'>
            <h1 id="project-title">
                Projects will be upload Soon
            </h1>
        </div>
        <div className="projectslist-subdiv" id='element'>
            <h1 id="project-title">
                Projects will be upload Soon
            </h1>
        </div>
        
    </div>
    
  )
}

export default Projectslist