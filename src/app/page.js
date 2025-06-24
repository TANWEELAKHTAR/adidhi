import FAQ from "./Components/FAQ"
import Hero from "./Components/Hero"
import HotelRestaurantJobs from "./Components/HotelRestaurantJobs"
import JobSeeker from "./Components/JobSeeker"
import NavBar from "./Components/NavBar"
import Testimonial from "./Components/Testimonial"
import ToHire from "./Components/ToHire"

const App = () => {
  return (
    <main className="relative w-full bg-[#F5F5F5]">
    <NavBar/>
    <Hero/>
    <JobSeeker/>
    <HotelRestaurantJobs/> 
    <ToHire/>
    <Testimonial/>
    <FAQ/>
    </main>
  )
}
export default App