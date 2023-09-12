import React from "react";
import { contact } from "../assets/data/Data";
import CV from "../assets/img/christian_larrea.pdf";
import myPhoto from '../assets/img/me_img.webp';
export const About = () => {
  return (
    <section className="about">
      <article>
        <img src={myPhoto}/>
      </article>
      <article>
        <h2>about me</h2>
        <p>
          I'm an analytics implementation engineer and programming enthusiast
          based in bonny Scotland. Get in touch to find out more.
        </p>
        <div>
        <a href={CV} download="christian_larrea_cv.pdf" className="btn primary-btn">
            download my CV
          </a>
          <a href="#work" className="btn secondary-btn">
            work experience
          </a>
          
        </div>
        <ul>
          {contact
            .filter((entry) =>
              ["orcid", "github", "linkedIn"].includes(entry.type)
            )
            .map((entry, index) => (
              <li key={`hero-contact-${index}`}>
                <a href={entry.link} target="_blank">
                  {entry.icon}
                </a>
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
};
