"use client"

export default function ToHire() {
  return (
    <section className="w-full min-h-screen relative mt-20 p-6">
      <h1 className="text-center text-5xl font-normal">Looking to Hire ?</h1>
      <p className="text-center mt-4">
        When Was the Last Time You Got More Than 3 Applicants for a Restaurant
        Vacancy?
      </p>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          
          {/* Card 1 - Post Jobs in Minutes */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Post Jobs in Minutes
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              Easily hire staff for free by posting a job in just 2 minutes, 
              connect directly with candidates, and receive applicant 
              resumes via SMS for a seamless hiring experience.
            </p>
          </div>

          {/* Card 2 - Connect with Aadhar Verified Candidates */}
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Connect with Aadhar Verified Candidates
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              Access a growing pool of skilled job seekers across all key roles
              —chefs, waiters, stewards, baristas, managers, and more.
            </p>
          </div>

          {/* Card 3 - Call Applicants Directly */}
          <div className="bg-white rounded-2xl p-8 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Call Applicants Directly
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              No middlemen. Call, schedule interviews, and make hiring 
              decisions instantly within the app.
            </p>
          </div>

        </div>
    </section>
  );
}
