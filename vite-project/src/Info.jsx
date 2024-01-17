import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import './Info.css'

export default function Info() {
  return (
    <div className='Info'>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}
