import React from "react";
import { Helmet } from "react-helmet";

const HelmetSite = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetSite;
