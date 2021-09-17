import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Team Members</h1>
          <div className="pricing__container">
            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img
                  src="ProfilePics/terryProfilePic.jpeg"
                  alt="terryProfilePic"
                />
                <name>Terry Kim</name>
                <position></position>
                <bio>
                  {" "}
                  My name is Terry and I am studying CS and business at MIT. My
                  interest is in developing technical products with CS and
                  turning them into impacts through entrepreneurship. I
                  initiated this project to provide resources to high school
                  students regardless of their socioeconomic backgrounds.
                </bio>
              </div>
            </div>
            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img
                  src="ProfilePics/johnProfilePic.jpeg"
                  alt="johnProfilePic"
                />
                <name>Sangjoon Lee</name>
                <position></position>
                <bio>
                  {" "}
                  Hey friends~ My name is John, Currently, I am a Master’s
                  Student in UCLA. I study Computer Science with focus on
                  Machine Learning and AI, I’ve been working on machine learning
                  team among the fellow developers, and I hope my work in this
                  area will advance education sector like never before!
                </bio>
              </div>
            </div>
            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img
                  src="ProfilePics/tonyProfilePic.jpeg"
                  alt="tonyProfilePic"
                />
                <name>Tony Yeon</name>
                <position></position>
                <bio>
                  {" "}
                  Hey everyone! My name is Tony and I am an undergraduate
                  chemical engineering major at UCI with hopes to pursue a CS
                  degree in the near future. Focusing on Counsly's backend, I
                  aim to create a medium where high school students are provided
                  opportunities beyond the confines of school.
                </bio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
