import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

function Footer() {
  return (
    <footer >
      <a href="#" className='footer__logo'>CG</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/cg.economou/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/cg_economou/"><FiInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer