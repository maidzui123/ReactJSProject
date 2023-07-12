import React from 'react'
import './about.css'
import ME from '../../assets/images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
import {FaComputer} from 'react-icons/fa6'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>  
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaComputer className='about-icon'/>
              <h5>Major</h5>
              <small>Software Engineer</small>
            </article>

            <article className='about__card'>
              <FaSchool className='about-icon'/>
              <h5>School</h5>
              <small>Ton Duc Thang University</small>
            </article>

            <article className='about__card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
          </div>
          <p>
            I am a software engineer with a passion for creating websites and web applications.
            I have experience working with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, and PostgreSQL.
            I have experience working with Node.js, Express, MongoDB, MySQL, and PostgreSQL.
          </p>
          <a href='#contact' className='btn btn-primary'></a>
        </div>
      </div>
    </section>
  )
}

export default About