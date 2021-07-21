import React from "react";
import HeroSectionHome from "../../HeroSection/HeroSectionHome";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <HeroSectionHome {...homeObjOne} />
    </>
  );
}

export default Home;
