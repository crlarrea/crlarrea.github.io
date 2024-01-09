import React from "react";
import { Helmet } from "react-helmet-async";
import { Rudderstack } from "./Rudderstack";
import { GTM } from "./GTM";
export const Head = () => {
  return (
    <Helmet>
      <title>Christian Larrea</title>
      <script>{Rudderstack.toString()}</script>
      <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/ffb7659c9a8230d7c509cd70/script.js"></script>
      <script>{GTM.toString()}</script>
    </Helmet>
  );
};
