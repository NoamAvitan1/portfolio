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
      <article>
        <section>
          <h1>Hey, I'm Noam Avitan,</h1>
          <span>And I'm</span>
          <span ref={el}></span>
          <p></p>
        </section>
        <figure>
          <img src="" alt="" />
        </figure>
      </article>
    </header>
  );
}
