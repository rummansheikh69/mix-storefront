"use client";
import { useState, useEffect } from "react";

function Hero() {
  const items = [
    {
      _id: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=870&q=80",
    },
    {
      _id: 2,
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=870&q=80",
    },
    {
      _id: 3,
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=870&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative w-full overflow-hidden md:rounded-b-md h-56 md:h-80">
        {/* Slides */}
        {items.map((item, index) => (
          <img
            key={item._id}
            src={item.image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Indicators */}
        <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50">
            ❮
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50">
            ❯
          </span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
