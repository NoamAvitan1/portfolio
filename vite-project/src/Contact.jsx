import React from 'react'
import './Contact.css'
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";



export default function Contact() {
  return (
    <article id='contact' className='Contact'>
      <h1 className='title'>Contact Me</h1>
        <section className='data'>
          <div className='contact-info'>
            <span><CiMail style={{color:'white'}}/></span>
           <p style={{color:'white'}}>noamavitan159753@gmail.com</p>
          </div>
          <div className='contact-info'>
            <span><MdOutlineLocalPhone style={{color:'white'}}/></span>
            <p style={{color:'white'}}>+972 53-723-4532</p>
          </div>
        </section>
    </article>
  )
}
