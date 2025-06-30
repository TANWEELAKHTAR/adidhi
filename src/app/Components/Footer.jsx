export default function Footer() {
  return (
    <div className="w-full mt-20">
      <div className="flex items-center justify-center flex-col p-6">
        <img
          className="object-cover w-40 h-40 "
          src="./images/adidhi-logo-vertical.png"
          alt=""
        />
        <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl text-center font-medium">
          Ready to hire smarter and faster?
        </h1>
        <p className="mt-4 text-sm text-center">
          Scan this QR code with your phone to download Adidhi app.
        </p>
        <img
          className="object-cover w-40 h-40 mt-4"
          src="./images/qr.png"
          alt=""
        />
      </div>
      <div className="hidden lg:flex w-full h-screen relative items-center justify-center overflow-hidden">
        <img
          className=" w-full absolute top-10 object-cover object-center p-6"
          src=".\images\adidhi-phone.png"
          alt=""
        />
      </div>
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
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Insta
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  Linkden
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
                >
                  X
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
    </div>
  );
}
