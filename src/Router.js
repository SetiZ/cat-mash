import React from "react";
import Cats from "./Cats";
import Mash from "./Mash";

const routes = {
  "/": () => <Cats />,
  "/mash": () => <Mash />,
};

export default routes;
