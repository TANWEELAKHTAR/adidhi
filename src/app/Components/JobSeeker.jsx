export default function JobSeeker() {
  return (
    <section className="w-full min-h-screen p-6 md:p-12 text-white">
      <div className="w-full h-full relative jobseeker rounded-4xl p-6 md:p-12">
        <div className="w-full md:w-1/2 mt-12">
          <h3 className="bg-white inline text-[#8E3300] font-medium px-3 py-2 rounded-lg text-sm">
            👋 Hey Job Seekers
          </h3>
          <h1 className="my-6 text-2xl md:text-3xl lg:text-4xl">
            Get Hotel & restaurant jobs that <br className="hidden md:inline" />{" "}
            match your skills and experience
          </h1>
          <p className="text-sm md:text-lg">
            tired of being undervalued or stuck in the wrong job?{" "}
            <br className="hidden md:inline" /> With Adidhi, you can access
            hundreds of real opportunities from hotels and restaurants that
            truly value your skills.
          </p>
        </div>
        <div className="w-full flex items-center justify-center md:justify-start gap-6 mt-8 text-black flex-wrap">
          <div className="w-60 h-72 bg-white rounded-3xl flex flex-col justify-center items-center p-6">
            <img className="w-18" src="./images/phone-fill.svg" alt="" />
            <h3 className="my-4 text-lg text-center">Totally Free to Use</h3>
            <p className="text-sm text-center">
              No charges or hidden fees—Adidhi stays 100% free for all job
              seekers, always.
            </p>
          </div>
          <div className="w-60 h-72 bg-white rounded-3xl flex flex-col justify-center items-center p-6">
            <img className="w-18" src="./images/handshake.svg" alt="" />
            <h3 className="my-4 text-lg text-center">
              Talk Directly to Employers
            </h3>
            <p className="text-sm text-center">
              No middlemen. Chat directly with employers for job clarity,
              salaries, and benefits info.
            </p>
          </div>
          <div className="w-60 h-72 bg-white rounded-3xl flex flex-col justify-center items-center p-6">
            <img className="w-18" src="./images/flag.svg" alt="" />
            <h3 className="my-4 text-lg text-center">
              Opportunities Across India
            </h3>
            <p className="text-sm text-center">
              Explore jobs in Hotels, Restaurants, Resorts, and Cafes across the
              entire country.
            </p>
          </div>
        </div>
        <img
          className="hidden lg:inline absolute bottom-0 right-0 w-3xl"
          src="./images/happy-young-waiter.png"
          alt=""
        />
      </div>
    </section>
  );
}
