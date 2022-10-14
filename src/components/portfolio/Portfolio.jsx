import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hairsallon.png'
import IMG2 from '../../assets/movies.jpg'
import IMG3 from '../../assets/rps.png'
import IMG4 from '../../assets/weather.jpg'
import IMG5 from '../../assets/port.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'A web app for hair sallon',
    github:'https://github.com/sokogou/ColorsTNC-FrontEnd'
    
  },
  {
    id:2,
    image:IMG2,
    title:'A web app for movies',
    github:'https://github.com/cgeconomou'
    
  },
  {
    id:3,
    image:IMG3,
    title:'Rock Paper Scissor, lets play',
    github:'https://github.com/cgeconomou/RockPaperS'
    
  },
  {
    id:4,
    image:IMG4,
    title:'A web app for weather',
    github:'https://github.com/cgeconomou/WebApp'
    
  },
  {
    id:5,
    image:IMG5,
    title:'React Portfolio',
    github:'https://github.com/cgeconomou/reactportfolio'
    
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className='btn' >Github</a>
              {/* <a href="" className='btn btn-primary'>Github</a> */}
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio