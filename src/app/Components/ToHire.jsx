"use client";

export default function ToHire() {
  return (
    <section className="w-full relative mt-10 p-6">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl my-6 text-center">
        <span className="text-[#DF6756]">Looking </span> to Hire?
      </h1>
      <p className="md:text-2xl text-center">
        When Was the Last Time You Got More Than 3 Applicants for a Restaurant
        Vacancy?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src="./images/toH1.png"
            alt=""
          />
        </div>
        <div className="rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src="./images/toH2.png"
            alt=""
          />
        </div>
        <div className="rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src="./images/toH3.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
