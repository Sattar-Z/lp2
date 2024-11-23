import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

const FooterSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/images/team/team01(U10s).jpeg",
      alt: "Storm Elite FC Image 1",
      caption: "Training Sessions"
    },
    {
      src: "/images/team/team02U7s.jpeg",
      alt: "Storm Elite FC Image 2",
      caption: "Match Day"
    },
    {
      src: "/images/team/team03(U9s).jpeg",
      alt: "Storm Elite FC Image 3",
      caption: "Team Building"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full px-4 sm:w-full md:w-1/2 lg:w-6/12 xl:w-6/12">
      <div className="mb-12 lg:mb-16">
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          {/* Slides */}
          <div 
            className="relative h-full w-full"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute h-full w-full"
                style={{ left: `${index * 100}%` }}
              >
                <Image
                  src={image.src}
                  width={400}
                  height={100}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <p className="text-center text-white">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-opacity hover:bg-opacity-75"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-opacity hover:bg-opacity-75"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-14 left-0 right-0">
            <div className="flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSlideshow;