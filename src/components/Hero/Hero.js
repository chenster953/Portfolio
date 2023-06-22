import React from 'react'
import pfp from './pfp-woman.png'

import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="upper">
      <div className="message">
        <h2>Front-End React Developer</h2>
        <p>Hi, I'm James Chen. A passionate Front-end React Developer based in Fremont, California.</p>
      </div>
      <div className="image">
        <img src={pfp} alt="pfp" />
      </div>
      </div>
      <div className="techStack"></div>
    </div>
  )
}

export default Hero