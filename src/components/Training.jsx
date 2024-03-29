import React, { useRef } from "react";
import { training } from "../assets/data/Data";
import { SlBadge } from "react-icons/sl";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { scrollCarousell } from "../utils/Helpers";
export const Training = () => {
  const trainingCarousell = useRef(null);

  return (
    <section className="training" id="training">
      <article>
        <h2>training</h2>
      </article>
      <article ref={trainingCarousell}>
        <span
          data-direction="left"
          onClick={(ev) => {
            scrollCarousell(ev, trainingCarousell);
          }}
        >
          <BsChevronCompactLeft />
        </span>
        {training.map((entry, index) => {
          return (
            <div key={`training-${index}`}>
              <p>{entry.issuer}</p>
              <h3>{entry.course}</h3>
              <ul>
                {entry.description.map((item, index) => {
                  return <li key={`training-description-${index}`}>{item}</li>;
                })}
              </ul>
              {entry.credential ? (
                <a href={entry.credential} target="_blank" aria-label={entry.issuer}>
                  <SlBadge />
                </a>
              ) : (
                ""
              )}
            </div>
          );
        })}
        <span
          data-direction="right"
          onClick={(ev) => {
            scrollCarousell(ev, trainingCarousell);
          }}
        >
          <BsChevronCompactRight />
        </span>
      </article>
    </section>
  );
};
