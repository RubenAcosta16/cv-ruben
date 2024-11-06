import React, { useState, useEffect } from "react";
import ProjectLink from "../projects/projectLink";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(100); // Estado para el ancho de slide

  useEffect(() => {
    // Establece el ancho del slide basado en el tamaño de la ventana
    const updateSlideWidth = () => {
      setSlideWidth(window.innerWidth >= 1024 ? 50 : 100);
    };
    updateSlideWidth(); // Llama a la función inmediatamente
    window.addEventListener("resize", updateSlideWidth); // Actualiza en redimensionar

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
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
    <div className="relative max-w-screen-md mx-auto p-4 overflow-hidden">
      {/* Contenedor del carousel */}
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isAnimating ? "transform" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full md:w-1/2 flex-shrink-0">
            <ProjectLink project={slide}></ProjectLink>
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        className="absolute top-1/2 left-[15%] md:left-1 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 text-white rounded-full hover:bg-opacity-60 transition duration-300 ease-in-out"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Botón Siguiente */}
      <button
        className="absolute top-1/2 right-[15%] md:right-1 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 text-white rounded-full hover:bg-opacity-60 transition duration-300 ease-in-out"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
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
