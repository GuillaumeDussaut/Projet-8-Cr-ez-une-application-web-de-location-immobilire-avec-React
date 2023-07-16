import React, { useState, useEffect } from "react";
import './slider.scss';

export default function Slider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = images.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, [images]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
  };

  return (
      <div className="sliderContainer">
        {images.length > 0 && (
          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        )}
        <div className="btns">
        <button className="btnPrev" onClick={prevSlide}>
          <img src={require('../../assets/ArrowLeft.svg').default} alt="flèche gauche du carrousel" />
        </button>
        <button className="btnNext" onClick={nextSlide}>
          <img src={require('../../assets/arrowRight.svg').default} alt="flèche droite du carrousel" />
        </button>
        </div>
      </div>  
  );
}









