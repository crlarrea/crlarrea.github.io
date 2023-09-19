import React from "react";
import { workExperience } from "../assets/data/Data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import workAnimation from "../assets/img/work_experience.json";

export const Work = () => {
  return (
    <section className="work" id="work">
      <article>
        <h2>work experience</h2>
        <ul>
          {workExperience.map((entry, index) => {
            return (
              <li key={`work-experience${index}`}>
                <details>
                  <summary>
                    <h4>
                      <MdKeyboardArrowRight />
                      {entry.title}
                    </h4>
                    <p>
                      <span>{entry.company}</span> - {entry.location}, {entry.country}
                    </p>
                    <p>
                      {entry.from} - {entry.to}
                    </p>
                  </summary>
                  <ul>
                    {entry.responsibilities.map((item, index) => {
                      return (
                        <li key={`description-${index}`}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </article>
      <article>
      <Player autoplay loop src={workAnimation}>
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
            speed='20'
          />
        </Player>
      </article>
    </section>
  );
};
