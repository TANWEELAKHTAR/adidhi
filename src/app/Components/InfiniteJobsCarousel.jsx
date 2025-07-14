"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const InfiniteJobsCarousel = () => {
  const carouselRef = useRef(null);
  const timelineRef = useRef(null);

  const images = ["/images/carousel-image.png"];

  // Duplicate the data for seamless infinite scroll
  const duplicatedData = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

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
      duration: 25,
      ease: "none",
    });
  }, []);

  return (
    <div className="w-full mb-12 overflow-hidden">
      <div ref={carouselRef} className="w-fit flex items-center gap-3">
        {duplicatedData.map((imgSrc, index) => (
          <div
            key={`${imgSrc}-${index}`}
            className="job-card flex-shrink-0 rounded-lg"
          >
            <img
              src={imgSrc}
              alt={`Job ${index + 1}`}
              className="h-48 md:h-80 object-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteJobsCarousel;
