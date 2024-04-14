import React from 'react'
import './Navbar.css'
import Male from './pictures/male.webp'
const Navbar = () => {
  return (
    <header id="home">
        <div className="male-div">  <img src={Male} alt="" id="maleicon"/></div>
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      </header>
  )
}

export default Navbar