import FAQ from "./Components/FAQ"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import HotelRestaurantJobs from "./Components/HotelRestaurantJobs"
import JobSeeker from "./Components/JobSeeker"
import NavBar from "./Components/NavBar"
import Testimonial from "./Components/Testimonial"
import ToHire from "./Components/ToHire"

const App = () => {
  return (
    <main className="relative w-full bg-[#F5F5F5]">
    {/* <img className="hidden lg:inline-block fixed right-20 top-40 z-[999] w-44 h-20 object-cover rounded-lg" src="./images/qr d.png" alt="" /> */}
    <NavBar/>
    <Hero/>
    <JobSeeker/>
    <HotelRestaurantJobs/> 
    <ToHire/>
    <Testimonial/>
    <FAQ/>
    <Footer/>
    </main>
  )
}
export default App