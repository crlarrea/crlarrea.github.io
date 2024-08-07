import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import aboutAnimation from "../assets/img/about_animation.json";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <section className="about" id="about" ref={ref}>
      {inView && (
        <>
          <article className="fade-in">
            <h2>about</h2>
            <p></p>
            <p>
              My journey began in the world of science, where I honed my
              analytical skills and curiosity. Today, I channel that expertise
              into crafting insightful, data-driven <span>solutions that empower businesses</span>. I blend technical
              prowess with a love for innovation, always eager to explore new
              challenges and opportunities.
            </p>
            <p>
              Join me as I navigate the dynamic intersection of
              <span> web technologies and data</span>, driven by a commitment to
              excellence and a zest for discovery.
            </p>
          </article>
          <article>
            <Player autoplay loop speed="0.4" src={aboutAnimation}>
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </article>
        </>
      )}
    </section>
  );
};
