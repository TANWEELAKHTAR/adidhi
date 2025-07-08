"use client";

import React from "react";

const HotelRestaurantJobs = () => {
  const jobCategories = [
    {
      id: 1,
      title: "Executive Chef",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore Executive Chef vacancies",
    },
    {
      id: 2,
      title: "Sous Chef",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore Sous Chef vacancies",
    },
    {
      id: 3,
      title: "Waiter",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore Waiter vacancies",
    },
    {
      id: 4,
      title: "Waitress",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore Waitress vacancies",
    },
    {
      id: 5,
      title: "Barista",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore Barista vacancies",
    },
    {
      id: 6,
      title: "Pastry Chef",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore Pastry Chef vacancies",
    },
    {
      id: 7,
      title: "F&B Manager",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore F&B Manager vacancies",
    },
    {
      id: 8,
      title: "Housekeeping",
      jobsAvailable: "1567 jobs available",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=faces",
      buttonText: "Explore Housekeeping vacancies",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl my-6">
          <span className="text-[#DF6756]">Get hired by </span>
          <br />
          leading hotels and restaurants.
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto">
          explore a wide range of job openings from leading hotel and restaurant
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
                className="w-full h-32 sm:h-48 object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg md:text-xl text-gray-900 text-center">
                {job.title}
              </h3>
              <p className="text-xs font-medium mb-4 text-center">
                {job.jobsAvailable}
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
