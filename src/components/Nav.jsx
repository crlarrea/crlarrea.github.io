import React from "react";
import { useState } from "react";
export const Nav = () => {
  const navigation = ["about", "work", "projects"];
  const [isActive, setActive] = useState(false);
  return (
    <nav>
      <ul>
        {navigation.map((link) => {
          return (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => {
                  setActive(link);
                }}
                className={link === isActive ? "active" : "inactive"}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
