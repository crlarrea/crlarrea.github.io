import React from "react";
import { OpenToWork } from "./OpenToWork";

export const Nav = () => {
  const navTitles = ["work", "publications", "training", "about", "contact"];
  return (
    <nav>
      <OpenToWork />
      <ul>
        {navTitles.map((entry, index) => {
          return (
            <li key={`menu-${index}`}>
              <a href={`#${entry}`}>{entry}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
