import React, { useEffect } from "react";
import "./Header.css";
import NavBar from "./NavBar";
import Typed from "typed.js";

export default function Header() {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"],
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
        </section>
        <figure>
          <img src="" alt="" />
        </figure>
      </article>
    </header>
  );
}
