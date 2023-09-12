import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/img/hero_animation.json";
import { contact } from "../assets/data/Data";

export const Hero = () => {
  return (
    <section className="hero">
      <article>
        <p>hello, i'm christian</p>
        <h1>
          implementation <span>engineer</span>
        </h1>
        <p>
          let's talk about digital analytics, integrations, and customer data
          platforms!
        </p>
        <ul>
          {contact
            .filter((entry) =>
              ["linkedIn", "mobile", "email"].includes(entry.type)
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
      <article>
        <Player autoplay loop src={heroAnimation}>
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </article>
    </section>
  );
};
