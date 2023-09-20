import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Publications } from "../components/Publications";
import { Work } from "../components/Work";
import { Training } from "../components/Training";
import { Rudderstack } from "../utils/Rudderstack";
export const Home = () => {
  useEffect(() => {
    rudderanalytics.page(window.title);
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Publications />
      <Training />
    </>
  );
};
