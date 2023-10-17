import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = () => {

  const [activeNav,setActiveNav] = useState('#')
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav=== '#'? 'active' : ''} onMouseEnter={() => setHoveredTab('#')}
        onMouseLeave={() => setHoveredTab(null)}>
          <i class="fa-solid fa-house"></i>
      {hoveredTab === '#' && <span className="popover">Home</span>}
      </a>


      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav=== '#about'? 'active' : ''} onMouseEnter={() => setHoveredTab('#')}
        onMouseLeave={() => setHoveredTab(null)}>
          <i class="fa-solid fa-user"></i>
          {hoveredTab === '#' && <span className="popover">About</span>}
          </a>

      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience'? 'active' : ''} onMouseEnter={() => setHoveredTab('#')}
        onMouseLeave={() => setHoveredTab(null)}>
          {hoveredTab === '#' && <span className="popover">Experience</span>}
        <i class="fa-solid fa-book"></i>
        </a>

      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav=== '#services'? 'active' : ''} onMouseEnter={() => setHoveredTab('#')}
        onMouseLeave={() => setHoveredTab(null)}>
        <i class="fa-solid fa-bell-concierge"></i>
        {hoveredTab === '#' && <span className="popover">Services</span>}
        </a>

      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact'? 'active' : ''} onMouseEnter={() => setHoveredTab('#')}
        onMouseLeave={() => setHoveredTab(null)}>
        <i class="fa-solid fa-message"></i>
        {hoveredTab === '#' && <span className="popover">Contact</span>}
        </a>
    </nav>
  )
}

export default Nav