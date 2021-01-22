import React from "react";
import FooterSite from "./inc/FooterSite";
import HelmetSite from "./inc/HelmetSite";
import NavbarSite from "./inc/NavbarSite";
import NewsLettersSite from "./site/inc/NewsLettersSite";

const IndexSite = () => {
  return (
    <>
      <HelmetSite title={"Index Site KazouGroup Srl"} />
      <NavbarSite />
      <NewsLettersSite />
      <FooterSite />
    </>
  );
};

export default IndexSite;
