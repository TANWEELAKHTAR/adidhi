"use client";

import React from "react";

const InfiniteJobsCarousel = () => {
  const images = ["/images/carousel-image.png"];

  // Duplicate data for seamless loop
  const duplicatedData = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <div className="w-full mb-12 overflow-hidden">
      <div className="carousel-track flex items-center gap-3 animate-carousel">
        {duplicatedData.map((imgSrc, index) => (
          <div
            key={`${imgSrc}-${index}`}
            className="job-card flex-shrink-0 rounded-lg"
          >
            <img
              src={imgSrc}
              alt={`Job ${index + 1}`}
              className="h-48 md:h-80 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteJobsCarousel;