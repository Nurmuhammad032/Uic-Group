import "./Landing.scss";
import { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxComponent from "./ParallaxComponent";
import { images } from "../../constants";
import { landingParallax } from "./ParallaxComponent";

const Landing = () => {
  document.addEventListener("scroll", landingParallax);

  return (
    <div className="app__landing">
      <div className="landing-bg main-bg">
        <img src={images.mainBg} alt="landing bg-img" />
      </div>
      <div className="container">
        <div className="landing-bg brand-bg">
          <img
            className="brand-img"
            src={images.brandBg}
            alt="landing bg-img"
          />
        </div>
      </div>

      <div className="landing-bg mountain-bg">
        <img
          className="mountain-img"
          src={images.mountainBg}
          alt="landing bg-img"
        />
      </div>

      <div className="app__landing-wrapper">
        <div className="container">
          <div className="landing-wrapper">
            <div className="app__landing-info">
              <div className="app__landing-desc">
                <h1>
                  Raqamli yechimlarni <br />
                  taklif qilamiz
                </h1>
                <p>Har qanday murakkablidagi</p>
              </div>
              <div className="app__landing-links">
                <a href="">
                  Brif to'ldirish
                  <span>
                    <i className="bi bi-arrow-right-short"></i>
                  </span>
                </a>
                <a href="">
                  Qo'ng'iroq
                  <span>
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                </a>
              </div>
            </div>
            {/* <div className="landing-bg brand-bg">
              <img
                className="brand-img"
                src={images.brandBg}
                alt="landing bg-img"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
