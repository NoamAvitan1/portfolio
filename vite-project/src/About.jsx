import React, { useState } from "react";
import "./About.css";
import { IoCodeSlashOutline } from "react-icons/io5";
import { AiOutlineCodepen } from "react-icons/ai";
import { SiAtom } from "react-icons/si";



export default function About() {
  const [type, setType] = useState("Code");
  const data = [
    {
      title: "Code",
      topic: "Passionate Algorithm Enthusiast",
      paragraph:
        "As a full-stack developer, I prioritize the creation of clean code that is both readable and maintainable. Clean code, to me, means more than just aesthetic appeal; it embodies a commitment to clarity, modularity, and efficiency. I believe in the power of meaningful variable names, consistent formatting, and the elimination of code duplication to enhance readability. Through continuous refactoring and a focus on testing, I ensure that my code remains adaptable and reliable. ",
      icon: <IoCodeSlashOutline/>,
    },
    {
      title: "Algorithm",
      topic: "Algorithm Problem Solver",
      paragraph:
        "My passion for solving algorithmic problems drives my enthusiasm for continuous learning and growth as a developer. I find joy in dissecting complex problems, devising efficient solutions, and optimizing code for performance. This passion extends beyond mere coding challenges; it reflects my commitment to cultivating a deep understanding of algorithms and data structures. Whether it's optimizing runtime or enhancing scalability, I relish the intellectual satisfaction that comes with crafting elegant and effective solutions to intricate problems.",
      icon: <AiOutlineCodepen/>,
    },
    {
      title: "Technologies",
      topic: "Versatile Tech Enthusiast",
      paragraph:
        "I am enthusiastic about constantly exploring new technologies and frameworks, showcasing my commitment to remaining at the forefront of diverse aspects in software development. Actively seeking exposure to emerging tools, languages, and frameworks is integral to my professional journey. Each encounter with a new technology becomes an opportunity for growth, allowing me to expand my skill set across various domains. This curiosity-driven approach not only enhances my versatility as a developer but also positions me to contribute creatively to the dynamic and ever-evolving landscape of technology.",
      icon: <SiAtom/>,
    },
  ];
  return (
    <article className="About" id="about">
      <div className="about-data">
      {data &&
        data.map((v, i) => (
          <section className="about-map" key={i}>
              <div onClick={()=>setType(v.title)} className={`${type === v.title ?'card-choosed':'card'}`}>
                <div style={{display:'flex', flexDirection:"column",gap:'10px'}}>
                  <h1 style={{color:"var(--text-color)", fontSize:'28px'}}>{v.title}</h1>
                  <span style={{color:"var(--second-text-color)",fontSize:'16px'}}>{v.topic}</span>
                </div>
                <div style={{color:'var(--main-color)', fontSize:'24px'}}>{v.icon}</div>
              </div>
            {v.title === type && <p className="text">{v.paragraph}</p>}
          </section>
        ))}
      </div>
    </article>
  );
}
