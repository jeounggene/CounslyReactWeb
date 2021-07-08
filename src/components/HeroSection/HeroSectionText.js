import React from "react";
import "./HeroSection.css";
// import policy from "./policy.pdf";
import AllPagesPDFViewer from "../pdf/all-pages";

import { Button } from "../Button";
import { Link } from "react-router-dom";

function HeroSectionText({ pdf }) {
  return (
    <>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={pdf} />
      </div>
    </>
  );
}

export default HeroSectionText;
