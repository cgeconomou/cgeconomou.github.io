import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hairsallon.png'
import IMG2 from '../../assets/movies.jpg'
import IMG3 from '../../assets/rps.png'
import IMG4 from '../../assets/weather.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/cgeconomou" className='btn' target='_blank'>Github</a>
          {/* <a href="" className='btn btn-primary'>Github</a> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/cgeconomou" className='btn' target='_blank'>Github</a>
          {/* <a href="" className='btn btn-primary'>Github</a> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/cgeconomou" className='btn' target='_blank'>Github</a>
          {/* <a href="" className='btn btn-primary'>Github</a> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/cgeconomou" className='btn' target='_blank'>Github</a>
          {/* <a href="" className='btn btn-primary'>Github</a> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/cgeconomou" className='btn' target='_blank'>Github</a>
          {/* <a href="" className='btn btn-primary'>Github</a> */}
        </article>
      </div>
    </section>
  )
}

export default Portfolio