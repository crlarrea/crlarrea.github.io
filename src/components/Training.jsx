import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { scrollCarousel } from "../utils/utils";
import { useInView } from "react-intersection-observer";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const Training = () => {
  const [training, setTraining] = useState(null);
  const getTraining = async () => {
    let { data: data, error } = await supabase.from("training").select("*");
    setTraining(data);
  };

  useEffect(() => {
    getTraining();
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section className="training" id="training" ref={ref}>
      <article>
        <h2>training</h2>
      </article>
      {inView && (
        <article className="fade-in">
          <div>
            {training &&
              training.map((entry) => {
                return (
                  <div key={entry.id}>
                    <span>{entry.issuer}</span>
                    <h3> {entry.course}</h3>
                    <ul>
                      {entry.tags.map((tag, index) => {
                        return <li key={`${entry.id}-${index}`}>{tag}</li>;
                      })}
                    </ul>
                    {entry.certificate && (
                      <a href={entry.certificate} target="_blank">
                        <RiVerifiedBadgeLine />
                      </a>
                    )}
                  </div>
                );
              })}
            <IoIosArrowDropleftCircle
              data-direction="left"
              onClick={scrollCarousel}
            />
            <IoIosArrowDroprightCircle
              data-direction="right"
              onClick={scrollCarousel}
            />
          </div>
        </article>
      )}
    </section>
  );
};
