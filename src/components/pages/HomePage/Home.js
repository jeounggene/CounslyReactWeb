import React from "react";
import HeroSectionNewHome from "../../HeroSection/HeroSectionNewHome";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Home() {
  return (
    <>
      <HeroSectionNewHome {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Home;
