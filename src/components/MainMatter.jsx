import React from 'react'
import DP from './pictures/dp.jpeg'
import msg from './pictures/msg.png'
import './mainmatter.css'
const MainMatter = () => {
  return (
    <div className='MainMatterDiv'>
      <div className="workdiv">
      <p id='nameintro'>Hi! I am Mudassir Khan</p>
      <h3 id='h1work'>I design & build <br></br>Web Application</h3>
     </div>
      <div className='dpdiv'>
        <img src={DP} alt="My photo" id='dp' />
      </div>
    </div>
  )
}

export default MainMatter