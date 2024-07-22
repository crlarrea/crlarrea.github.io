import React from "react";
import photo from "../assets/img/wee_me.webp";
import cv from "../assets/img/christian_larrea.pdf";

import {
  FaLinkedinIn,
  FaWhatsapp,
  FaRegPaperPlane,
  FaOrcid,
} from "react-icons/fa6";

export const Hero = () => {
  return (
    <section className="hero">
      <article>
        <h1>christian larrea</h1>
        <p>data analytics engineer and web development enthusiast.</p>
        <a href={cv} download="christian_larrea.pdf" className="secondary-btn">
          download CV
        </a>
      </article>
      <article>
        <img src={photo} alt="me" fetchpriority="high" />


        <ul>
          <li></li>
          <li>
            <a
              href="https://linkedin.com/in/christian-larrea/"
              target="_blank"
              aria-label="Link to LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/447522140226/?text=Hello%2C%20Christian!"
              aria-label="Link to WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              href="mailto:crlarrea@protonmail.com?subject=Hello%20there!"
              aria-label="Link to Email"
            >
              <FaRegPaperPlane />
            </a>
          </li>
          <li>
            <a
              href="https://orcid.org/0000-0001-7579-7876"
              target="_blank"
              aria-label="Link to Orcid"
            >
              <FaOrcid />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
