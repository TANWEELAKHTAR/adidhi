// page.js
import Script from "next/script";
import CTA from "./Components/CTA";
import FAQ from "./Components/FAQ";
import Hero from "./Components/Hero";
import HotelRestaurantJobs from "./Components/HotelRestaurantJobs";
import JobSeeker from "./Components/JobSeeker";
import Testimonial from "./Components/Testimonial";
import ToHire from "./Components/ToHire";

const App = () => {
  return (
    <>
      <main className="relative w-full bg-[#FCFCFC]">
        <img
          className="hidden lg:inline-block fixed right-20 top-40 z-[999] w-44 h-20 object-cover rounded-lg"
          src="./images/qr d.png"
          alt=""
        />
        <Hero />
        <JobSeeker />
        <HotelRestaurantJobs />
        <ToHire />
        <Testimonial />
        <FAQ />
        <CTA />
      </main>
      <Script
        id="tawkto"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68808fcc75f3b71916aedd32/1j0r33dse';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
    </>
  );
};

export default App;
