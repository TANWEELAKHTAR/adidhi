export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 z-[999] w-full flex items-center justify-between bg-[#F1F1F187] py-4 px-6 md:px-32">
        <img className="w-36 h-16 object-fit" src="./images/adidhi-logo.svg" alt="" />
        <div className="flex gap-8">
            <button className="text-xs md:text-lg px-4 py-2 rounded-full text-white bg-[#D06E5C]">Download the app</button>
            <div className="md:flex items-center gap-2 hidden">
                <img className="h-6 w-6" src="./images/call.svg" alt="" />
                <span>+91 1234567890</span>
            </div>
        </div>
    </nav>
  )
}