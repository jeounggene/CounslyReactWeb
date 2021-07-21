import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Services() {
  return (
    <>
      {/* <Pricing /> */}
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
