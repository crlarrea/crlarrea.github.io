import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { capitalize } from "../utils/utils";
import { useInView } from "react-intersection-observer";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const Experience = () => {
  const [workExperience, setWorkExperience] = useState(null);
  const getWorkExperience = async () => {
    let { data: data, error } = await supabase
      .from("work_experience")
      .select("*")
      .order("from", { ascending: false });

    setWorkExperience(data);
  };

  useEffect(() => {
    getWorkExperience();
  }, []);
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <section className="experience" id="work" ref={ref}>
      <article>
        <h2> experience</h2>

        {workExperience && inView && (
          <ul className="fade-in">
            {workExperience.map((entry, index) => {
              return (
                <li key={entry.id}>
                  <details open={index === 0 ? true : false}>
                    <summary>
                      <div>
                        <div></div>
                      </div>
                      <span>
                        {entry.to
                          ? new Date(entry.from).getFullYear()
                          : new Date().getFullYear()}
                      </span>

                      <h3>{capitalize(entry.title)}</h3>
                      <p>
                        {capitalize(entry.city)}, {entry.country.toUpperCase()}
                      </p>
                    </summary>
                    <ul>
                      {entry.description.map((entry, index) => {
                        return <li key={`${entry.id}-${index}`}>{entry}</li>;
                      })}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        )}
      </article>
    </section>
  );
};
