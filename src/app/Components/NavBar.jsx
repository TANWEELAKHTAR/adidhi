"use client"
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 z-[999] w-full flex items-center justify-between bg-[#FFFFFF] py-3 px-6 md:px-32">
      <Link href={"/"}>
        <img
          className="w-36 h-16 object-fit"
          src="./images/adidhi-logo.svg"
          alt=""
        />
      </Link>
      <div className="flex gap-8">
        <button
          className="text-sm md:text-lg px-4 py-2 rounded-full text-white bg-[#DF6756] font-bold cursor-pointer"
          onClick={() => {
            const userAgent =
              navigator.userAgent || navigator.vendor || window.opera;

            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
              window.location.href =
                "https://apps.apple.com/in/app/adidhi-hospitality/id6743770521?uo=2";
            } else if (/android/i.test(userAgent)) {
              window.location.href =
                "https://play.google.com/store/apps/details?id=com.adidhi.hospitality";
            } else {
              alert("Please open this link on your mobile device.");
            }
          }}
        >
          Download the app
        </button>

        <div className="md:flex items-center gap-2 hidden">
          <img className="h-6 w-6" src="./images/call.svg" alt="" />
          <span className="font-bold cursor-pointer">+91 97461 91919</span>
        </div>
      </div>
    </nav>
  );
}
