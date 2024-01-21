import React from "react";
import "./Projects.css";
import image1 from "./assets/Screenshot 2024-01-20 194608.png";
import image2 from "./assets/Screenshot 2024-01-20 194627.png";

export default function Projects() {
  const sites = [
    {
      name:"CSS Store",
      information:
        "Revolutionize your website's aesthetic with our E-commerce platform, offering a seamless experience for users to upload, sell, or share custom CSS styles using the powerful Monaco editor.",
      img: image1,
      link:"https://css-store.vercel.app/",
    },
    {
      name:"Game Zone",
      information:
        "A captivating gaming hub blending sophisticated algorithms with meticulous CSS design for an immersive experience featuring classic games like 2048 and Tic Tac Toe, and more.",
      img: image2,
      link:"https://gamezone4u.onrender.com/",
    },
  ];

  return (
    <article className="Projects" id="projects">
      <h1 className="title">My projects</h1>
      <section className="data">
        {sites.map((site,i) => (
          <figure className="site" key={i}>
            <div className="about">
            <h1 className="name">{site.name}</h1>
            <p className="information">{site.information}</p>
            </div>
            <a className="link" href={site.link}>
            <img className="image" src={site.img} alt=""/>
            </a>
          </figure> 
        ))}
      </section>
    </article>
  );
}
