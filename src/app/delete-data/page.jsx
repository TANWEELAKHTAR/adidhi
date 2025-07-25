"use client";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function DeleteDataForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        event.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Delete <span className="text-orange-500">Your Data</span>
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    <p className="font-medium">Success!</p>
                    <p className="text-sm">
                      Your data deletion request has been submitted
                      successfully. We will process your request within 7
                      working days.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <p className="font-medium">Error!</p>
                    <p className="text-sm">
                      There was an error submitting your request. Please try
                      again or contact support.
                    </p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-gray-900 mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-3"
                  >
                    Email Address (used in our app)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email used in the app"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-semibold text-gray-900 mb-3"
                  >
                    Reason (Optional)
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    placeholder="Reason for data deletion"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 outline-none"
                >
                  {isSubmitting ? "Submitting..." : "Request Data Deletion"}
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12">
              <div className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  How Data Deletion Works
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By submitting this request, your account and all associated
                  data will be permanently deleted within 7 working days. Please
                  ensure the email you provide matches the one used in our app.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Support
                    </h3>
                    <p className="text-gray-600">privacy@adidhi.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
