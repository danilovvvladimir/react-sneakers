import React from "react";

import sliderIMG from "../../assets/images/slider-kermit.png";
import sponsorsIMG from "../../assets/images/sponsors.png";
import Button from "../UI/Button/Button";

import "./Slider.scss";

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__wrapper">
          <img src={sponsorsIMG} alt="sponsors" className="slider__sponsors" />
          <div className="slider__text">
            <h2 className="slider__title">
              <span className="accent">Stan Smith,</span>
              Forever!
            </h2>
            <Button extraClassName="slider__btn">Купить</Button>
          </div>
          <img
            src={sliderIMG}
            alt="Kermit-Sneakers"
            className="slider__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
