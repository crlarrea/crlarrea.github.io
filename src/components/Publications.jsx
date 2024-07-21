import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useInView } from "react-intersection-observer";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { scrollCarousel } from "../utils/utils";
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const Publications = () => {
  const [publications, setPublications] = useState(null);
  const getPublications = async () => {
    let { data: data, error } = await supabase
      .from("publications")
      .select("*")
      .order("year", { ascending: false });

    setPublications(data);
  };

  useEffect(() => {
    getPublications();
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section className="publications" id="publications" ref={ref}>
      {inView && (
        <>
          <article>
            <h2>publications</h2>
          </article>
          <article className="fade-in">
            <div>
              {publications &&
                publications.map((entry) => {
                  return (
                    <a key={entry.id} href={entry.url} target="_blank">
                      <h3>{entry.title}</h3>
                      <p>{entry.journal}</p>

                      <ul>
                        {entry.authors.map((author, index) => {
                          return <li key={`${entry.id}-${index}`}>{author}</li>;
                        })}
                      </ul>
                    </a>
                  );
                })}
            </div>
            <IoIosArrowDropleftCircle
              data-direction="left"
              onClick={scrollCarousel}
            />
            <IoIosArrowDroprightCircle
              data-direction="right"
              onClick={scrollCarousel}
            />
          </article>
        </>
      )}
    </section>
  );
};
