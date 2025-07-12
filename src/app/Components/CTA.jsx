export default function CTA() {
  return (
    <div className="flex items-center justify-center flex-col p-6 m-10">
        <h1 className="mt-20 text-3xl md:text-5xl lg:text-7xl text-center font-bold">
          Ready to hire <br />
          <span className="text-[#DF6756]">smarter and faster?</span>
        </h1>
        <div className="flex my-10 items-center justify-center gap-4 flex-wrap mb-10">
          <img
            className="object-cover w-40 h-40 "
            src="./images/adidhi-logo-vertical.svg"
            alt=""
          />
          <img
            className="object-cover w-40 h-40 mt-4"
            src="./images/qr.png"
            alt=""
          />
          <p className="mt-4 text-2xl md:text-5xl lg:text-4xl max-w-sm text-center md:text-start font-bold">
            Scan this QR code with your phone to download Adidhi app.
          </p>
        </div>
      </div>
  )
}