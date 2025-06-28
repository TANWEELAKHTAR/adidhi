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
      answer: "Adidhi offers a wide range of hospitality jobs including front desk positions, housekeeping, food & beverage service, kitchen staff, concierge, event management, hotel management, and many more roles across hotels, restaurants, resorts, and other hospitality businesses."
    },
    {
      question: "I have created my profile on the App. What's next?",
      answer: "After creating your profile, complete all sections including your experience, skills, and preferences. Upload a professional photo and resume. Then start browsing and applying to jobs that match your profile. You'll receive notifications when employers show interest in your profile."
    },
    {
      question: "I did not get OTP, what should I do?",
      answer: "If you didn't receive the OTP, first check your spam/junk folder. Ensure you've entered the correct phone number. Try requesting the OTP again after 2-3 minutes. If the issue persists, contact our support team through the app or try using the alternative verification method."
    },
    {
      question: "Do I have to pay to apply to jobs?",
      answer: "No, applying to jobs on Adidhi is completely free for job seekers. You can create your profile, browse jobs, and apply to as many positions as you want without any charges. Our platform is designed to help you find employment opportunities at no cost."
    },
    {
      question: "How do I get notified about new job opportunities?",
      answer: "Enable push notifications in the app settings to receive instant alerts about new jobs matching your profile. You can also set up email notifications and customize your preferences to receive updates about specific types of roles or locations."
    }
  ];

  const employersFAQ = [
    {
      question: "What kind of hospitality businesses are hiring on Adidhi?",
      answer: "Hotels, restaurants, resorts, cafes, catering services, event management companies, cruise lines, airlines, and various other hospitality and tourism businesses use Adidhi to find qualified staff for their operations."
    },
    {
      question: "How do I post a job on Adidhi?",
      answer: "Create your employer account, complete your business profile, and click 'Post a Job'. Fill in the job details including position, requirements, salary, and benefits. Once posted, qualified candidates will start applying, and you'll receive notifications about new applications."
    },
    {
      question: "What is the cost of hiring through Adidhi?",
      answer: "Adidhi offers flexible pricing plans for employers. You can choose from monthly subscriptions, per-job posting fees, or premium plans with additional features like priority listing and advanced candidate matching. Contact our sales team for customized enterprise packages."
    },
    {
      question: "How do I find the right candidates for my business?",
      answer: "Use our advanced filtering options to search candidates by experience, skills, location, and availability. Our AI-powered matching system also recommends suitable candidates based on your job requirements. You can review profiles, portfolios, and ratings before making contact."
    },
    {
      question: "Can I manage multiple job postings from one account?",
      answer: "Yes, you can manage multiple job postings from a single employer account. Our dashboard allows you to track applications, manage candidate communications, schedule interviews, and monitor the hiring progress for all your open positions in one place."
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
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
          Got Questions? We've Got Answers.
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
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