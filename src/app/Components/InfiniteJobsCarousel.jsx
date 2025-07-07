"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const InfiniteJobsCarousel = () => {
  const carouselRef = useRef(null);
  const timelineRef = useRef(null);

  const images = [
    "/images/C1.png",
    "/images/C2.png",
    "/images/C3.png",
    "/images/C4.png",
  ];

  // Duplicate the data for seamless infinite scroll
  const duplicatedData = [...images, ...images];

  useEffect(() => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll(".job-card");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 24; // Including gap
    const totalWidth = cardWidth * images.length;

    // Set up infinite scroll animation
    timelineRef.current = gsap.timeline({ repeat: -1 });

    timelineRef.current.set(carousel, { x: 0 });
    timelineRef.current.to(carousel, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
    });
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={carouselRef}
          className="w-fit flex gap-6 will-change-transform"
        >
          {duplicatedData.map((imgSrc, index) => (
            <div
              key={`${imgSrc}-${index}`}
              className="job-card flex-shrink-0 h-64 w-96 rounded-lg bg-red-400"
            >
              <img
                src={imgSrc}
                alt={`Job ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteJobsCarousel;
