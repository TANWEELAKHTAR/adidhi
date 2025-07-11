import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
        <div className="col-span-3">
          <img src=".\images\adidhi-logo-vertical-white.png" alt="" />
          <p className="text-gray-300 text-sm md:w-2/3 mt-4">
            Adidhi Hospitality Solutions Pvt Ltd Malabar Innovation
            Entrepreneurship Zone, Building No:446, Mangattuparamba, Near Kannur
            University Centre, Kalliasseri, Kannur, Kerala - 670 567
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-white font-normal mb-6">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href={"/terms-policy"}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
              >
                Terms & policy
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="col-span-1">
          <h3 className="text-white font-normal mb-6">Connect with us </h3>
          <ul className="flex gap-4 items-center">
            <li>
              <a
                href="https://www.instagram.com/adidhi.app?igsh=c3hnZmZ1ODZpN2t5"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/adidhi-app/"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1Ksh4cHJEk/?mibextid=wwXIfr"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
              >
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center"><span className="text-xs md:text-sm">Copyright © 2025. Adidhi. All rights reserved.</span></div>
    </footer>
  );
}
