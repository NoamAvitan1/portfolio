import React from 'react'
import './Menu.css'

 
export default function ({toggle,setToggle}) {
  const links = [
  {href:"#about",text:'About'},
  {href:"#projects",text:'Projects'},
  {href:"#contact",text:"Contact"}, 
 ];
  return (
        <section className="navigation">
          {links.map((link,i) => (
            <a onClick={()=>setToggle(!toggle)} key={i} className="page" href={link.href}>{link.text}</a>
          ))}
      </section>
  )
}
