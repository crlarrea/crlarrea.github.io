import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { capitalize } from "../utils/utils";
import { useInView } from "react-intersection-observer";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const Projects = () => {
  const [projects, setProjects] = useState(null);
  const getProjects = async () => {
    let { data: data, error } = await supabase.from("projects").select("*");

    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section className="projects" id="projects" ref={ref}>
      {inView && (
        <>
          <article>
            <h2>projects</h2>
          </article>
          <article className="fade-in">
            {projects &&
              projects.map((entry) => {
                return (
                  <a key={entry.id} href={entry.url} target="_blank">
                    <img src={entry.image} loading="lazy" />
                    <h4>{capitalize(entry.name)}</h4>
                    <p>{entry.description}</p>
                    <ul>
                      {entry.tags.map((tag, index) => {
                        return <li key={`${entry.id}-${index}`}>{tag}</li>;
                      })}
                    </ul>
                  </a>
                );
              })}
          </article>
        </>
      )}
    </section>
  );
};
