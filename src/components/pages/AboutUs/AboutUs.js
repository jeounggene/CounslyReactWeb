import React from "react";
import HeroSectionTOS from "../../HeroSectionTOS";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function AboutUs() {
  return (
    <>
      <HeroSectionTOS {...homeObjOne} />
    </>
  );
}

export default AboutUs;
