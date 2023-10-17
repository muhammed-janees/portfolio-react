import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Tic Tac Toe</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/muhammed-janees/Tic-Tac-Toe.git" className='btn' target='_blank'>Github</a>
            <a href="https://tic-tac-toe23-game.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Beauty.</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/muhammed-janees/Beauty..git" className='btn' target='_blank'>Github</a>
            <a href="https://boisterous-axolotl-101c24.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>FitQuest</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/muhammed-janees/Fitquest.git" className='btn' target='_blank'>Github</a>
            <a href="https://endearing-blini-d4b4b3.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio