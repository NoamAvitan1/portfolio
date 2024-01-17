import React from 'react'
import './NavBar.css'
import {FaGithub,FaLinkedin} from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className="NavBar">
    <article className='ar'>
      <h1 className="title">Portfolio</h1>
      <section className="navigation">
        <a className="page" href="#about">
          About
        </a>
        <a className="page" href="#projects">
          Projects
        </a>
        <a className="page" href="#contact">
          Contact
        </a>
      </section>
      <section className='info'>
        <a className="link" href="https://github.com/NoamAvitan1">
          <FaGithub />
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/noam-avitan-33a390271/"
        >
          <FaLinkedin />
        </a>
      </section>
    </article>
  </div>
  )
}
