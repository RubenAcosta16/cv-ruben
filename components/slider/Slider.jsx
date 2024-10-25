import React, { useState } from "react";

import ProjectLink from "../projects/projectLink";

const Carousel = ({ slides }) => {
  //   const slides = [
  //     <div key={1} className="p-4 bg-blue-500 text-white flex items-center justify-center">
  //       <h1 className="text-2xl">Contenido 1</h1>
  //     </div>,
  //     <div key={2} className="p-4 bg-green-500 text-white flex items-center justify-center">
  //       <h1 className="text-2xl">Contenido 2</h1>
  //     </div>,
  //     <div key={3} className="p-4 bg-red-500 text-white flex items-center justify-center">
  //       <h1 className="text-2xl">Contenido 3</h1>
  //     </div>,
  //   ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500); // Duración de la animación
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <div className="relative max-w-md mx-auto p-4 overflow-hidden">
      {/* Contenedor del carousel */}
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isAnimating ? "transform" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            <ProjectLink  project={slide}></ProjectLink>
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 text-white rounded-full hover:bg-opacity-60"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Botón Siguiente */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 text-white rounded-full hover:bg-opacity-60"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
