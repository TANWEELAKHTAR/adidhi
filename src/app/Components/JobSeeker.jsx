export default function JobSeeker() {
  return (
    <section className="w-full md:p-12 text-white">
      <div className="w-full h-full relative p-6 md:p-12 bg-gradient-to-b from-[#ff4a24] to-black md:rounded-4xl flex items-center">
        <div className="w-full lg:w-2/3">
          <img
            className="w-44 object-cover bg-white rounded-xl p-2"
            src="/images/adidhi-logo.svg"
            alt=""
          />
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl my-6">
            Revolutionizing the <br className="hidden lg:block" /> Hospitality Job hunting.
          </h1>
          <p className="font-normal text-2xl w-full lg:w-3/4">
            The tourism & hospitality sector in India accounts for 4.3 Cr jobs,
            which is 9.0% of the total employment in the country. Adidhi is
            exclusively designed for meeting recruitment and career development
            in this sector.
          </p>
          <div className="flex items-center mt-6 gap-4">
            <img
              className="w-16 md:w-20 h-16 md:h-20 object-fit"
              src="/images/js1.svg"
              alt=""
            />
            <div>
              <h2 className="font-bold text-2xl md:text-3xl">Totally Free to Use</h2>
              <p className="font-normal text-lg md:text-xl">No charges or hidden fees</p>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-4">
            <img
              className="w-16 md:w-20 h-16 md:h-20 object-fit"
              src="/images/js2.svg"
              alt=""
            />
            <div>
              <h2 className="font-bold text-2xl md:text-3xl">Talk Directly to Employers</h2>
              <p className="font-normal text-lg md:text-xl">
                No middlemen. Chat directly
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-4">
            <img
              className="w-16 md:w-20 h-16 md:h-20 object-fit"
              src="/images/flag.svg"
              alt=""
            />
            <div>
              <h2 className="font-bold text-2xl md:text-3xl">Opportunities Across India</h2>
              <p className="font-normal text-lg md:text-xl">
                Explore jobs across the country.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3">
          <img className="w-96 object-cover" src="/images/phone.png" alt="" />
        </div>
      </div>
    </section>
  );
}
