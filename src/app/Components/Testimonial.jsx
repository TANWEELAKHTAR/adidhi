"use client"

import React from 'react';

const Testimonial = () => {
  const jobSeekerTestimonials = [
    {
      name: "Abhay Gupta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Adidhi made my job search so much easier. I found my dream job in a star hotel within days!"
    },
    {
      name: "Divya Sharma",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=150&h=150&fit=crop&crop=face",
      text: "I loved how Adidhi matched me with roles that fit my experience and skills. The process was smooth and stress-free."
    },
    {
      name: "Kalpana Das",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Thanks to Adidhi, I connected with great employers and landed a job that suits my schedule perfectly."
    },
    {
      name: "Ibrahim Ali",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "The app's interface is super easy to use, and I received regular updates about my applications. Highly recommended for anyone in hospitality!"
    },
    {
      name: "Saravanan P",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "With Adidhi, I finally found a workplace where I feel valued. The support and opportunities are amazing!"
    },
    {
      name: "Anup kumar",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      text: "With Adidhi, I discovered a team that truly believes in my growth. Every day feels purposeful and empowering!"
    }
  ];

  const partnerTestimonials = [
    {
      name: "Raandhal Restaurant",
      text: "Adidhi has transformed our hiring process. We now find skilled hospitality staff quickly and efficiently, saving us valuable time."
    },
    {
      name: "Vythiri Mist",
      text: "Finding reliable hospitality staff used to be a challenge, but Adidhi's smart matching features have made recruitment effortless and effective."
    },
    {
      name: "Raj Residency",
      text: "Adidhi helped us discover talented professionals who meet our high standards. It's a game-changer for hospitality recruitment."
    },
    {
      name: "Beycho Cafe",
      text: "With Adidhi, we've significantly reduced our hiring time and improved the quality of our hires. It's the perfect solution for busy hotel owners."
    },
    {
      name: "Mikas Biriyani",
      text: "Thanks to Adidhi, we connected with qualified candidates who truly fit our team culture. The app's user-friendly interface makes recruitment seamless."
    },
    {
      name: "Mikas Biriyani",
      text: "Thanks to Adidhi we found top-tier talent that aligned perfectly with our company values. The platform's intuitive design made the entire hiring process smooth and efficient."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-2 leading-tight">
          Our Users Speak:
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal">
          Hospitality Recruitment That Works
        </h2>
      </div>

      {/* Job Seekers Section */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-8">
          <div className="px-6 py-3 rounded-lg flex items-center space-x-3">
            <span className="text-3xl bg-[#DF6756] rounded-xl p-3 text-white"><img className='w-6 h-6' src="./images/quote.svg" alt="" /></span>
            <span className="font-medium text-lg">Voices of Our Jobseekers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobSeekerTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-200"
                />
                <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="px-6 py-3 rounded-lg flex items-center space-x-3">
            <span className="text-3xl bg-[#DF6756] rounded-xl p-3 text-white"><img className='w-6 h-6' src="./images/quote.svg" alt="" /></span>
            <span className="font-medium text-lg">Hear from Our Recruitment Partners</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerTestimonials.map((testimonial, index) => (
            <div key={index} className="rounded-xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gray-900 rounded-lg p-3 mr-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white"><img className='w-6 h-6' src="./images/quote.svg" alt="" /></span>
                </div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              </div>
              <p className="leading-relaxed text-base">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;