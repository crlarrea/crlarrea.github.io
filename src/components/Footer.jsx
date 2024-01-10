import React from "react";
import { ContactForm } from "./ContactForm";
import { contact } from "../assets/data/Data";
export const Footer = () => {
  return (
    <>
      <article>
        <h2>contact</h2>
        <ContactForm />
      </article>
      <article></article>
      <article>
        <ul>
          {contact
            .filter((entry) =>
              ["linkedIn", "mobile", "email"].includes(entry.type)
            )
            .map((entry, index) => (
              <li key={`footer-contact-${index}`}>
                <a href={entry.link} target="_blank" aria-label={entry.type}>
                  {entry.icon}
                </a>
              </li>
            ))}
        </ul>
      </article>
    </>
  );
};
