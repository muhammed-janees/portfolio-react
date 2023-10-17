import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img className='me_image' src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <i className='about__icon' class="fa-solid fa-award"></i>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className='about__card'>
              <i className='about__icon' class="fa-solid fa-users"></i>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className='about__card'>
              <i className='about__icon' class="fa-solid fa-folder-open"></i>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>Driven by a curiosity for innovation and a love for problem-solving, I thrive in dynamic environments that challenge me to think creatively and critically. I strongly believe in the power of collaboration and am committed to fostering an environment of teamwork and open communication.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About