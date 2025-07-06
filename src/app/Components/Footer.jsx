import Link from "next/link";

export default function Footer() {
  return (
      <footer className="bg-black text-white py-16 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          {/* Logo and Address */}
          <div className="col-span-2">
            <img src=".\images\adidhi-logo-vertical-white.png" alt="" />
            <p className="text-gray-300 text-sm">Adress</p>
          </div>

          {/* Job Seeker */}
          <div className="col-span-1">
            <h3 className="text-white font-normal mb-6">Job Seeker</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Recent jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Employer */}
          <div className="col-span-1">
            <h3 className="text-white font-normal mb-6">Employer</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Recent profiles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  how we work
                </a>
              </li>
              <li>
                <Link
                  href={"/privacy-policy"}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-white font-normal mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/adidhi.app?igsh=c3hnZmZ1ODZpN2t5"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/adidhi-app/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1Ksh4cHJEk/?mibextid=wwXIfr"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Adidhi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div> */}
      </footer>
  );
}
