import React from 'react'
import insta from './pictures/insta.png'
import gmail from './pictures/gmail.png'
import linkedin from './pictures/linkedin.png'
import './socials.css'
const Socials = () => {
  return (
    <div className='socials'>
        
        <img src={linkedin} alt="insta" id='linkedin'/>
        <img src={gmail} alt="insta" id='gmail'/>
    </div>
  )
}

export default Socials