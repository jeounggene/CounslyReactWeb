import React from "react";
import "./HeroSection.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function HeroSectionHome({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section-main" : "home__hero-section-main darkBg"
        }
      >
        <div className="container">
          <div className="col-center">
            <div className="row-center home__hero-row">
              <div className="home__hero-text-wrapper-center">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle-center"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <a href="https://play.google.com/store?hl=en_US&gl=US">
                  <Button buttonSize="btn--wide" buttonColor="red">
                    {buttonLabel}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionHome;
