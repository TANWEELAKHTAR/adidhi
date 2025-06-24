"use client"

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const InfiniteJobsCarousel = () => {
  const carouselRef = useRef(null);
  const timelineRef = useRef(null);

  const jobData = [
    {
      id: 1,
      role: "Waiter",
      openings: "1200 Openings",
      bgColor: "#FDE194",
      image: "./images/Waiter.png",
      jobs: [
        {
          title: "Restaurant Waiter",
          company: "Blue Fine Restaurant",
          category: "Restaurant",
          experience: "0 - 2 Years",
          salary: "₹20000 - ₹40000",
          location: "Payyannur, Kerala",
          posted: "6 hours ago",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop",
        },
        {
          title: "Restaurant Waiter (English speaking)",
          company: "Orfila Lounge",
          category: "Restaurant",
          experience: "1 - 3 Years",
          salary: "₹15000 - ₹30000",
          location: "Palakkad, Kerala",
          posted: "6 hours ago",
          logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop",
        },
      ],
    },
    {
      id: 2,
      role: "Chef Jobs",
      openings: "1200 Openings",
      bgColor: "#FE5B00",
      image:
        "./images/Chef.png",
      jobs: [
        {
          title: "Kerala Meals Master",
          company: "Hotel Juju International",
          category: "Hotel",
          experience: "2 - 5 Years",
          salary: "₹25000 - ₹28000",
          location: "Payyannur, Kerala",
          posted: "6 hours ago",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop",
        },
        {
          title: "Kitchen Trainee",
          company: "Orfila Lounge",
          category: "Restaurant",
          experience: "2 - 5 Years",
          salary: "₹15000 - ₹20000",
          location: "Palakkad, Kerala",
          posted: "6 hours ago",
          logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop",
        },
      ],
    },
    {
      id: 3,
      role: "F & B Manager",
      openings: "1000 Openings",
      bgColor: "#D6C1FA",
      image:
        "./images/Manager.png",
      jobs: [
        {
          title: "Restaurant Waiter",
          company: "Luxury Dine",
          category: "Restaurant",
          experience: "3 - 5 Years",
          salary: "₹35000 - ₹60000",
          location: "Mumbai, Maharashtra",
          posted: "2 hours ago",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop",
        },
        {
          title: "Restaurant Waiter (English speaking)",
          company: "Hotel Leela",
          category: "Hotel",
          experience: "2 - 4 Years",
          salary: "₹30000 - ₹50000",
          location: "Bangalore, Karnataka",
          posted: "4 hours ago",
          logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop",
        },
      ],
    },
    {
      id: 4,
      role: "Bartender",
      openings: "800 Openings",
      bgColor: "#CDFEBF",
      image:
        "./images/Barista.png",
      jobs: [
        {
          title: "Restaurant Waiter",
          company: "Cocktail Lounge",
          category: "Bar",
          experience: "1 - 3 Years",
          salary: "₹22000 - ₹40000",
          location: "Goa, India",
          posted: "1 hour ago",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop",
        },
        {
          title: "Restaurant Waiter (English speaking)",
          company: "Bar & Grill",
          category: "Restaurant",
          experience: "2 - 4 Years",
          salary: "₹25000 - ₹45000",
          location: "Pune, Maharashtra",
          posted: "3 hours ago",
          logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop",
        },
      ],
    },
  ];

  // Duplicate the data for seamless infinite scroll
  const duplicatedData = [...jobData, ...jobData, ...jobData];

  useEffect(() => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll(".job-card");
    const cardWidth = cards[0].offsetWidth + 24; // Including gap
    const totalWidth = cardWidth * jobData.length;

    // Set up infinite scroll animation
    timelineRef.current = gsap.timeline({ repeat: -1 });

    timelineRef.current.set(carousel, { x: 0 });
    timelineRef.current.to(carousel, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
    });

    // Pause on hover
    const handleMouseEnter = () => {
      timelineRef.current.pause();
    };

    const handleMouseLeave = () => {
      timelineRef.current.resume();
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={carouselRef}
          className="flex gap-6 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {duplicatedData.map((job, index) => (
            <div
              key={`${job.id}-${index}`}
              className="job-card flex-shrink-0 h-[280px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-visible"
              style={{ backgroundColor: job.bgColor }}
            >
              <div className="flex w-full h-full relative">
                {/* Left side - Image (overflowing) */}
                <div className="w-44 h-full relative">
                  <img
                    src={job.image}
                    alt={job.role}
                    className="absolute z-10 bottom-0 right-0 w-full h-80 object-cover"
                  />
                </div>

                {/* Right side - Content */}
                <div className="bg-white rounded-[20px] m-3 ml-0 px-4 py-5 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-[18px] font-bold text-gray-900 mb-1 leading-tight">
                      {job.role}
                    </h3>
                    <p className="text-gray-500 text-[13px] font-medium">
                      {job.openings}
                    </p>
                    <div
                      className="w-full h-[1px] bg-gray-200 mt-3 mb-4"
                      style={{
                        background:
                          "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 4px, transparent 4px, transparent 8px)",
                      }}
                    ></div>
                  </div>

                  <div className="space-y-3 flex-1 overflow-hidden">
                    {job.jobs.map((jobItem, jobIndex) => (
                      <div
                        key={jobIndex}
                        className="bg-white border border-gray-100 rounded-[12px] p-3 shadow-sm"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2 flex-1 min-w-0">
                            <div
                              className="w-7 h-7 rounded-[8px] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                              style={{
                                backgroundColor:
                                  jobIndex === 0 ? "#f59e0b" : "#6b7280",
                              }}
                            >
                              {jobItem.company.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 text-[12px] leading-tight truncate">
                                {jobItem.title}
                              </h4>
                              <div className="flex items-center text-[10px] text-gray-500 mt-0.5">
                                <span className="truncate">
                                  {jobItem.company}
                                </span>
                                <span className="mx-1">|</span>
                                <span className="text-gray-400">
                                  {jobItem.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-[9px] text-gray-400 mb-2">
                          Posted {jobItem.posted}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-[10px] text-gray-600">
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{jobItem.experience}</span>
                          </div>
                          <div className="flex items-center text-[10px] text-gray-600">
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="truncate">{jobItem.location}</span>
                          </div>
                          <div className="text-[11px] font-semibold text-gray-900">
                            {jobItem.salary}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteJobsCarousel;
