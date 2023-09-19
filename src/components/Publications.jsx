import React, { useRef } from "react";
import { publications } from "../assets/data/Data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { scrollCarousell } from "../utils/Helpers";
export const Publications = () => {
  const publicationsCarousell = useRef(null);
  return (
    <section className="publications" id="publications">
      <article>
        <h2>publications</h2>
      </article>
      <article ref={publicationsCarousell}>
        <span data-direction="left"  onClick={(ev) => {
            scrollCarousell(ev, publicationsCarousell);
          }}>
          <BsChevronCompactLeft />
        </span>
        {publications.map((entry, index) => {
          return (
            <div key={`publication-${index}`}>
              <h3>
                <a href={entry.link} target="_blank">
                  {entry.title}
                </a>
              </h3>
              <p>{entry.authors.join(", ")}</p>
              <p>{entry.journal}</p>
            </div>
          );
        })}
        <span
          data-direction="right"
          onClick={(ev) => {
            scrollCarousell(ev, publicationsCarousell);
          }}
        >
          <BsChevronCompactRight />
        </span>
      </article>
    </section>
  );
};
