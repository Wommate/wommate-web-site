import React, { useState, useEffect } from "react";
import "./Partenairs.css";
import logo from "../../img/logo_wommate.png";
import img2 from "../../img/apropos.png";
import img3 from "../../img/active-solution-logo.png";
import img4 from "../../img/logo-minamemontre.jpg";
import img5 from "../../img/logo-bella.jpg";
import odia from "../../img/odia.jpg";
import flecheGauche from "../../img/fleche-gauche.png";
import flecheDroite from "../../img/fleche-droite.png";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [logo, odia, img2, img3, img4, img5];
const slideInterval = 3000; // Intervalle en millisecondes entre chaque slide

const Partenairs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);

  useEffect(() => {
    AOS.init();

    if (isAutoScrollActive) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, slideInterval);

      return () => clearInterval(intervalId);
    }
  }, [isAutoScrollActive]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleAutoScroll = () => {
    setIsAutoScrollActive((prev) => !prev);
  };

  return (
    <div className="partenairs">
      <div className="partenairs__title">
        <h1 className="h1" id="partenaire" data-aos="zoom-in-up">
          Partenaires
        </h1>
      </div>
      <div className="carrousel">
        <div className="partenairs__content">
          <div className="partenairs__img">
            <img src={images[currentIndex]} alt="logo" />
            <img
              src={images[(currentIndex + 2) % images.length]}
              alt="logo"
            />
            {!currentIndex ? (
              <img src={images[currentIndex + 1]} alt="logo" />
            ) : (
              <img src={images[currentIndex - 1]} alt="logo" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partenairs;
