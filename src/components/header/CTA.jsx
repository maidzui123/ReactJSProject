import React from 'react'
import CV from '../../assets/images/me.png'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Dowload My CV</a>
        <a href="#talk" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA