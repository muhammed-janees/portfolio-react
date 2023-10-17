import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Frontend</h3>
          </div>

          <ul className='service__list'>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Crafting dynamic and user-friendly websites.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Expertise in utilizing popular frontend frameworks such as React, Angular, etc.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p> Implementing optimization techniques to enhance website performance.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Ensuring that web applications are compatible across multiple devices.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Thoroughly testing and debugging frontend applications to identify and resolve any issues.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Designing efficient and secure database structures.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Crafting robust and scalable APIs tailored to your specific business needs.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Analyzing and optimizing backend systems for enhanced performance.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p> Implementing security measures and authentication protocols to safeguard your data.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Customizing backend frameworks to meet specific project requirements.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Crafting visually appealing and cohesive design elements.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Developing responsive and adaptive designs that seamlessly adapt to various devices.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Conducting in-depth user research to gain valuable insights into target audiences.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Creating detailed wireframes that serve as the blueprint for intuitive user interfaces.</p>
            </li>
            <li>
            <i className='service__list-icon' class="fa-solid fa-check"></i>
            <p>Integrating accessibility to ensure the products are usable to individuals with diverse abilities.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services