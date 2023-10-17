import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/" target='_blank'><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com/" target='_blank'><i class="fa-brands fa-twitter"></i></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer