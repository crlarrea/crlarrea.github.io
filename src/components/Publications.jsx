import React from "react";
import { publications } from "../assets/data/Data";

export const Publications = () => {
  console.log(publications);
  return (
    <section className="publications">
      <article>
        <h2>publications</h2>
      </article>
      <article>
        <span>left</span>
        {publications.map((entry) => {
          return (
            <div>
              <h3><a href={entry.link} target='_blank'>{entry.title}</a></h3>
              <p>{entry.authors.join(", ")}</p>
              <p>{entry.journal}</p>
            </div>
          );
        })}
    <span>right</span>
      </article>
    </section>
  );
};
