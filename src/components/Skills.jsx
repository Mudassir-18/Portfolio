import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div className="skill-main-div">
    <div className="skillquestion">
        <h3 id='skill-qn-h3'>In the coding universe, what's your power combo?</h3>
        <p id="skill-ans-p">My power combo is the <bold>MERN</bold> </p>
    </div>
    <div className="skills-description">
        <div className="skills-desc">
        <h3 id="skills-alphabet">M</h3>
        <p id="skills-explantion"> MongoDB, a NoSQL database, ensures adaptability to diverse data types and high-volume real-time applications. Its flexibility and scalability make it ideal for evolving data needs in dynamic environments, providing a resilient solution for handling complex datasets.</p>
        </div>
        <div className="skills-desc">
        <h3 id="skills-alphabet">E</h3>
        <p id="skills-explantion">Express.js, a minimalist web framework for Node.js, ensures lightweight, flexible web application development. Its minimalistic design streamlines the creation of robust and scalable web applications, fostering simplicity and efficiency in the development process.</p>
        </div>
        <div className="skills-desc">
        <h3 id="skills-alphabet">R</h3>
        <p id="skills-explantion">React adopts a declarative approach to UI development, enhancing efficiency and code readability. Developers describe the desired UI state, and React intelligently updates the interface to match this state. This clarity promotes a better understanding of UI behavior. </p>
        </div>
        <div className="skills-desc">
        <h3 id="skills-alphabet">N</h3>
        <p id="skills-explantion">Node.js enables server-side JavaScript, unifying client and server development under a single language. This streamlines workflows, enhancing code consistency and reducing the need for context-switching between languages. JavaScript versatility, traditionally limited to the client side.</p>
        </div>
    </div>
    </div>
  )
}

export default Skills