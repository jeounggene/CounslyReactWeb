import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default SignUp;
