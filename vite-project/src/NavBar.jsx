import React, { useState } from "react";
import "./NavBar.css";
import Menu from "./Menu";

export default function NavBar() {
  const [toggle,setToggle] = useState(false);
  return (
    <div className="NavBar">
      <article className="ar">
        <h1 className="title">Portfolio</h1>
        <section className="menu-bar">
          <Menu />
        </section>
        <button onClick={()=>setToggle(!toggle)} className="button-menu">
          <span className={`${toggle ? 'close-menu-first' : 'span-menu'}`}></span>
          <span className={`${toggle ? 'close-menu-second' : 'span-menu'}`}></span>
          <span className={`${toggle ? 'close-menu-third' : 'span-menu'}`}></span>
        </button>
      </article>
      { 
        <section className={`slide-menu ${toggle ? 'visible' : 'hidden'}`}>
          <Menu/>
        </section>
        }
    </div>
  );
}
