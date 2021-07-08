import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Products;
