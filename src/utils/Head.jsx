import React from "react";
import { Helmet } from "react-helmet-async";
import { Rudderstack } from "./Rudderstack";
export const Head = () => {
  return (
    <Helmet>
      <title>Christian Larrea</title>
      <script>{Rudderstack.toString()}</script>
    </Helmet>
  );
};
