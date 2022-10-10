import React from 'react'
import './about.css'
import ME from '../../assets/About.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>6+ Months</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed Projects</small>
          </article>
        </div>
        <p > Hardworking and ambitious with a desire for further training and gaining work 
          experience in the field of programming. Possessing a great ability in learning 
          new programs or methods, being adjust-able in every practices way of working. 
          Possessing an engineer foundation and degree, with experience on computer 
          drawing media. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About