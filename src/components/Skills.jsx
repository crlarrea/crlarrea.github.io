import React from "react";
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

import { FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";

export const Skills = () => {
  return (
    <article>
      <IoLogoJavascript />
      <IoLogoPython />
      <FaGitAlt />
      <SiMongodb />
      <IoLogoHtml5 />
      <IoLogoCss3 />
      <BiLogoPostgresql />
      <SiGoogletagmanager />
      <SiGoogleanalytics />
    </article>
  );
};
