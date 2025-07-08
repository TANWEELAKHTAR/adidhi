"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('jobseekers');
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenItem(null); // Close any open items when switching tabs
  };

  const jobseekersFAQ = [
    {
      question: "What kind of jobs are available on Adidhi?",
      answer: "From Steward to Head Chef and all the jobs in between, you will find jobs fit for all levels of skills and experience on Adidhi"
    },
    {
      question: "What kind of hospitality businesses are hiring on Adidhi?",
      answer: " You can apply to jobs from a wide range of hospitality businesses like Hotels, Restaurants, Cafes, Resorts, Cloud Kitchens, and Catering businesses on Adidhi"
    },
    {
      question: "I have created my profile on the App. What's next?",
      answer: "That's awesome. Now, enter your preferences and relax as employers call you directly to discuss various opportunities"
    },
    {
      question: "I did not get OTP, what should I do?",
      answer: " If you do not get OTP, wait for some time and try again via the “Resend OTP” option. You will receive an SMS with your OTP. Enter that code to login or sign up."
    },
    {
      question: "Do I have to pay to apply to jobs?",
      answer: "Absolutely not. This platform is 100% Free for all job applicants."
    }
  ];

  const employersFAQ = [
    {
      question: "How to Post a Job on Adidhi?",
      answer: " In order to post a job, you need to register and fill out basic information about your business first. After that, you will be able to click on the “Post a Job” option wherein you need to enter details about the job like Job Title, Experience, Location, Job type, and so on."
    },
    {
      question: "What kind of candidates can I find on Adidhi?",
      answer: " Right from skilled professionals and recent graduates to students willing to work part-time, you will find all kinds of candidates on Adidhi. You can choose applicants based on your requirement."
    },
    {
      question: "How can I talk to candidates directly?",
      answer: "Once you have signed up and posted a job, you can see jobseekers profiles who have applied for the job. You can directly connect with them and discuss the job details."
    }
  ];

  const currentFAQ = activeTab === 'jobseekers' ? jobseekersFAQ : employersFAQ;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-20">
      {/* Toggle Switch */}
      <div className="flex justify-center items-center mb-8 gap-4">
        <span className={`text-sm font-medium transition-colors duration-300 ${
          activeTab === 'jobseekers' ? 'text-[#7D4237]' : 'text-black'
        }`}>
          For jobseekers
        </span>
        
        <button
          onClick={() => handleTabChange(activeTab === 'jobseekers' ? 'employers' : 'jobseekers')}
          className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 ${
            activeTab === 'employers' ? 'bg-[#7D4237]' : 'bg-[#7D4237]'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
              activeTab === 'employers' ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        
        <span className={`text-sm font-medium transition-colors duration-300 ${
          activeTab === 'employers' ? 'text-[#7D4237]' : 'text-black'
        }`}>
          For Employers
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Got Questions? <span className='text-[#DF6756]'>We've Got Answers.</span>
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 md:px-40">
        {currentFAQ.map((item, index) => (
          <div
            key={`${activeTab}-${index}`}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
            >
              <span className="text-lg font-medium text-gray-900 pr-4">
                {item.question}
              </span>
              <div className="flex-shrink-0">
                {openItem === index ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItem === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;