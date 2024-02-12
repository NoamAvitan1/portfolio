import React, { useEffect, useRef } from "react";
import "./Header.css";
import NavBar from "./NavBar";
import Typed from "typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Header() {
  const el = useRef();
  const pdfFile = '/cv.pdf';

  const DownloadCv = () => {
    const anchor = document.createElement('a');
    anchor.href = pdfFile;
    anchor.download = 'cv.pdf';
    anchor.click();
  }

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header className="Header">
      <nav className="nav">
        <NavBar />
      </nav>
      <article className="data">
        <section className="paragraph">
          <h1 style={{fontSize:'40px', color:'var(--text-color)' ,fontWeight:'bold'}}>Hey, I'm Noam Avitan</h1>
          <div className="type">
          <span style={{color:'var(--text-color)', fontSize:'23px'}}>And I'm</span>
          <span style={{color:'var(--main-color)', padding:'4px', fontSize:'23px'}} ref={el}></span>
          </div>
          <p style={{wordBreak:"break-word", width:'340px', lineHeight:'22px', color:'var(--second-text-color)', marginTop:'10px'}}>Fullstack development is a symphony of creativity and functionality, seamlessly fusing frontend aesthetics and backend robustness to compose user-centric and efficient solutions.</p>
          <div className="info">
          <a className="link" href="https://github.com/NoamAvitan1">
            <FaGithub />
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/noam-avitan-33a390271/"
          >
            <FaLinkedin />
          </a>
        </div>
        <button className="download-cv" onClick={()=>DownloadCv()}>Download CV</button>
        </section>
        <figure>
          <img src="" alt="" />
        </figure>
      </article>
    </header>
  );
}
