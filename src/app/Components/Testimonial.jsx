"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Testimonial = () => {
  const jobSeekerCarouselRef = useRef(null);
  const partnerCarouselRef = useRef(null);
  const jobSeekerAnimRef = useRef(null);
  const partnerAnimRef = useRef(null);

  const jobSeekerTestimonials = [
    {
      name: "Abhay Gupta",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      text: "Adidhi made my job search so much easier. I found my dream job in a star hotel within days!",
    },
    {
      name: "Divya Sharma",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=80&h=80&fit=crop&crop=face",
      text: "I loved how Adidhi matched me with roles that fit my experience and skills. The process was smooth and stress-free.",
    },
    {
      name: "Kalpana Das",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      text: "Thanks to Adidhi, I connected with great employers and landed a job that suits my schedule perfectly.",
    },
    {
      name: "Ibrahim Ali",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      text: "The app's interface is super easy to use, and I received regular updates about my applications. Highly recommended for anyone in hospitality!",
    },
    {
      name: "Saravanan P",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      text: "With Adidhi, I finally found a workplace where I feel valued. The support and opportunities are amazing!",
    },
    {
      name: "Anup Kumar",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
      text: "With Adidhi, I discovered a team that truly believes in my growth. Every day feels purposeful and empowering!",
    },
  ];

  const partnerTestimonials = [
    {
      name: "Beycho Cafe",
      location: "Wayanad",
      text: "With Adidhi, we've significantly reduced our hiring time and improved the quality of our hires. It's the perfect solution for busy hotel owners.",
      logo: "BEY\nCHO",
    },
    {
      name: "Mikas Biriyani",
      location: "Kannur",
      text: "Thanks to Adidhi, we connected with qualified candidates who truly fit our team culture. The app's user-friendly interface makes recruitment seamless.",
      logo: "MIKAS\nBIRIYANI",
    },
    {
      name: "Raandhal",
      location: "Kannur",
      text: "Adidhi helped us discover talented professionals who meet our high standards. It's a game-changer for hospitality recruitment.",
      logo: "Raandhal",
    },
    {
      name: "Vythiri Mist",
      location: "Wayanad",
      text: "Finding reliable hospitality staff used to be a challenge, but Adidhi's smart matching features have made recruitment effortless and effective.",
      logo: "VYTHIRI\nMIST",
    },
    {
      name: "Raj Residency",
      location: "Kochi",
      text: "Adidhi has transformed our hiring process. We now find skilled hospitality staff quickly and efficiently, saving us valuable time.",
      logo: "RAJ\nRESIDENCY",
    },
  ];

  // Configuration constants
  const ANIMATION_CONFIG = {
    duration: 30,
    ease: "none",
    repeat: -1,
    cardWidth: 290,
    gap: 10,
  };

  // Initialize GSAP animations
  useGSAP(() => {
    const createInfiniteCarousel = (carouselRef, animRef) => {
      if (!carouselRef.current) return;

      const carousel = carouselRef.current;
      const cards = carousel.children;
      const totalWidth = cards.length * ANIMATION_CONFIG.cardWidth;

      // Set initial position to show seamless loop
      gsap.set(carousel, { x: 0 });

      // Create infinite animation
      animRef.current = gsap.to(carousel, {
        x: -totalWidth / 2, // Move half the total width (since we duplicate items)
        duration: ANIMATION_CONFIG.duration,
        ease: ANIMATION_CONFIG.ease,
        repeat: ANIMATION_CONFIG.repeat,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    };

    // Initialize both carousels
    createInfiniteCarousel(jobSeekerCarouselRef, jobSeekerAnimRef);
    createInfiniteCarousel(partnerCarouselRef, partnerAnimRef);

    // Cleanup function
    return () => {
      jobSeekerAnimRef.current?.kill();
      partnerAnimRef.current?.kill();
    };
  }, []);

  // Carousel control handlers
  const handleCarouselMouseEnter = (animRef) => {
    animRef.current?.pause();
  };

  const handleCarouselMouseLeave = (animRef) => {
    animRef.current?.play();
  };

  // Render testimonial card for job seekers
  const renderJobSeekerCard = (testimonial, index) => (
    <div
      key={index}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 min-w-[280px] max-w-[280px] flex-shrink-0"
    >
      <div className="flex items-center mb-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-gray-200"
        />
        <h3 className="font-medium text-gray-900 text-sm md:text-xl">
          {testimonial.name}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
        {testimonial.text}
      </p>
    </div>
  );

  // Render testimonial card for partners
  const renderPartnerCard = (testimonial, index) => (
    <div
      key={index}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[280px] max-w-[280px] flex-shrink-0"
    >
      <div className="flex items-center mb-3">
        <div className="bg-gray-400 rounded-md p-2 mr-3 flex items-center justify-center min-w-[40px] h-[40px]">
          <span className="text-white text-xs font-bold text-center leading-tight whitespace-pre-line">
            {testimonial.logo}
          </span>
        </div>
        <div>
          <h3 className="font-medium text-sm md:text-xl text-gray-900">
            {testimonial.name}
          </h3>
          <p className="text-xs text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
        {testimonial.text}
      </p>
    </div>
  );

  // Render section header
  const renderSectionHeader = (title) => (
    <div className="flex items-center justify-center mb-8 p-4">
      <div className="flex items-center space-x-3">
        <img
          className="w-10 h-10 bg-[#DF6756] p-2 rounded-xl"
          src="/images/quote.svg"
          alt=""
        />
        <span className="font-medium text-lg md:text-3xl">{title}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-full mx-auto bg-gray-50 overflow-hidden p-6 md:p-12">
      <header className="text-center mb-16 px-4">
        <h1 className="text-[#DF6756] text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
          Our Users Speak:
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800">
          Hospitality Recruitment That Works
        </h2>
      </header>

      {/* Job Seekers Testimonials Section */}
      <section className="mb-10 py-6 md:py-12 bg-[#F2F2F2] rounded-2xl md:rounded-4xl">
        {renderSectionHeader("Voices of Our Jobseekers")}

        <div className="overflow-hidden">
          <div
            ref={jobSeekerCarouselRef}
            className="flex gap-2.5"
            onMouseEnter={() => handleCarouselMouseEnter(jobSeekerAnimRef)}
            onMouseLeave={() => handleCarouselMouseLeave(jobSeekerAnimRef)}
          >
            {/* Create seamless infinite loop by duplicating testimonials */}
            {[...jobSeekerTestimonials, ...jobSeekerTestimonials].map(
              renderJobSeekerCard
            )}
          </div>
        </div>
      </section>

      {/* Partners Testimonials Section */}
      <section className="py-6 md:py-12 bg-[#F2F2F2] rounded-2xl md:rounded-4xl">
        {renderSectionHeader("Hear from Our Recruitment Partners")}

        <div className="overflow-hidden">
          <div
            ref={partnerCarouselRef}
            className="flex gap-2.5"
            onMouseEnter={() => handleCarouselMouseEnter(partnerAnimRef)}
            onMouseLeave={() => handleCarouselMouseLeave(partnerAnimRef)}
          >
            {/* Create seamless infinite loop by duplicating testimonials */}
            {[...partnerTestimonials, ...partnerTestimonials].map(
              renderPartnerCard
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
