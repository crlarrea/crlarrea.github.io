import React from "react";
import { OpenToWork } from "./OpenToWork";


export const Nav = () => {
  const navTitles = ["about", "work", "publications", "training", 'contact'];
  return (
    <nav>
      <OpenToWork props={{colour:'#33c3baff'}}/>
      <ul>
        {navTitles.map((entry,index)=>{
            return <li key={`menu-${index}`}>
                <a href={`#${entry}`}>{entry}</a>
                </li>
        })}

        
      </ul>
    </nav>
  );
};
