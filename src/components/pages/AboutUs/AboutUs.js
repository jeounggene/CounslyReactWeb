import React from "react";
import HeroSectionTOS from "../../HeroSection/HeroSectionTOS";
import HeroSection from "../../HeroSection/HeroSection";

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function AboutUs() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSectionTOS {...homeObjTwo} />
    </>
  );
}

export default AboutUs;
