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
    </>
  );
};
export default App;
