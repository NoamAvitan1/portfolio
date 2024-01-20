import React from "react";
import "./Projects.css";
import image1 from "./assets/Screenshot 2024-01-20 194608.png";
import image2 from "./assets/Screenshot 2024-01-20 194627.png";

export default function Projects() {
  const sites = [
    {
      information:
        "Revolutionize your website's aesthetic with our E-commerce platform, offering a seamless experience for users to upload, sell, or share custom CSS styles using the powerful Monaco editor.",
      img: image1,
    },
    {
      information:
        "A captivating gaming hub blending sophisticated algorithms with meticulous CSS design for an immersive experience featuring classic games like 2048 and Tic Tac Toe, and more.",
      img: image2,
    },
  ];

  return (
    <article className="Projects" id="projects">
      <h1 className="title">My projects</h1>
      <section className="data">
        {sites.map((site,i) => (
          <figure key={i}>
            <p>{site.information}</p>
            <img src={site.img} alt="" width={100}/>
          </figure> 
        ))}
      </section>
    </article>
  );
}
