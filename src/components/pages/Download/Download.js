import React from "react";
import HeroSectionDownload from "../../HeroSection/HeroSectionDownload";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Download() {
  return (
    <>
      <HeroSectionDownload {...homeObjOne} />
    </>
  );
}

export default Download;
