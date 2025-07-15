"use client";

import React from "react";

const HotelRestaurantJobs = () => {
  const jobCategories = [
    {
      id: 1,
      title: "Chef",
      jobsAvailable: "200 jobs",
      image:
        "/images/h1.png",
      buttonText: "Explore Executive Chef vacancies",
    },
    {
      id: 2,
      title: "Sous Chef",
      jobsAvailable: "333 jobs",
      image:
        "/images/h2.png",
      buttonText: "Explore Sous Chef vacancies",
    },
    {
      id: 3,
      title: "Waiter",
      jobsAvailable: "678 jobs",
      image:
        "/images/h3.png",
      buttonText: "Explore Waiter vacancies",
    },
    {
      id: 4,
      title: "Waitress",
      jobsAvailable: "389 jobs",
      image:
        "/images/h4.png",
      buttonText: "Explore Waitress vacancies",
    },
    {
      id: 5,
      title: "Barista",
      jobsAvailable: "105 jobs",
      image:
        "/images/h5.png",
      buttonText: "Explore Barista vacancies",
    },
    {
      id: 6,
      title: "Pastry chef",
      jobsAvailable: "369 jobs",
      image:
        "/images/h6.png",
      buttonText: "Explore Pastry Chef vacancies",
    },
    {
      id: 7,
      title: "Manager",
      jobsAvailable: "25 jobs",
      image:
        "/images/h7.png",
      buttonText: "Explore F&B Manager vacancies",
    },
    {
      id: 8,
      title: "Housekeeping",
      jobsAvailable: "100 jobs",
      image:
        "/images/h8.png",
      buttonText: "Explore Housekeeping vacancies",
    },
  ];

  return (
    <div className="w-full p-6 md:p-14 py-8">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl my-6">
          <span className="text-[#DF6756]">Get hired by </span>
          <br />
          leading hotels and restaurants.
        </h1>
        <p className="md:text-2xl max-w-4xl mx-auto">
          Explore a wide range of job openings from leading hotel and restaurant
          chains.
          <br className="hidden sm:block" />
          From entry-level to executive roles — we've got something for
          everyone.
        </p>
      </div>
      <div className="bg-[#F2F2F2] p-8 rounded-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
        {jobCategories.map((job) => (
          <div key={job.id} className=" rounded-lg overflow-hidden">
            <div className="w-full">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-32 sm:h-56 object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-sm md:text-xl text-gray-900 text-center">
                {job.title}
              </h3>
              <p className="text-xs font-medium mb-4 text-center mt-2">
                {job.jobsAvailable} <br />available
              </p>

              {/* Button */}
              <button className="hidden md:block w-full bg-[#753E34] hover:bg-amber-800 text-white py-3 px-4 rounded-full text-xs transition-colors duration-200">
                {job.buttonText}
              </button>
              <button className="block md:hidden w-full bg-[#753E34] hover:bg-amber-800 text-white py-2 px-4 rounded-full text-xs transition-colors duration-200">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-[#D06E5C] hover:bg-red-500 text-white font-semibold py-4 px-8 rounded-full text-xs sm:text-sm md:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Explore latest vacancies &rarr;
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default HotelRestaurantJobs;
