import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/portfolio1.jpg'
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/portfolio3.jpg'
import IMG4 from '../../assets/images/portfolio4.jpg'
import IMG5 from '../../assets/images/portfolio5.png'
import IMG6 from '../../assets/images/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a portfolio item title',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: '#',
    demo: '#'
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: '#',
    demo: '#'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt='' />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio