"use client"
export default function CTA() {
  return (
    <div className="flex items-center justify-center flex-col p-6 mb-20">
      <img
        className="md:hidden object-cover w-40 h-40 "
        src="./images/adidhi-logo-vertical.svg"
        alt=""
      />
      <h1 className="mt-10 md:mt-20 text-3xl md:text-5xl lg:text-7xl text-center font-bold">
        Ready to hire <br />
        <span className="text-[#DF6756]">smarter and faster?</span>
      </h1>
      <div className="hidden md:flex my-10 items-center justify-center gap-4 flex-wrap mb-10">
        <img
          className="object-cover w-40 h-40 "
          src="./images/adidhi-logo-vertical.svg"
          alt=""
        />
        <img
          className="object-cover w-40 h-40 mt-4"
          src="./images/qr.svg"
          alt=""
        />
        <p className="mt-4 text-2xl md:text-5xl lg:text-4xl max-w-sm text-center md:text-start font-bold">
          Scan this QR code with your phone to download Adidhi app.
        </p>
      </div>
      <div className="md:hidden mt-10">
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
      </div>
    </div>
  );
}
