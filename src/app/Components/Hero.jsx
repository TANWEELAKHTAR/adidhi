import InfiniteJobsCarousel from "./InfiniteJobsCarousel";

export default function Hero() {
  return (
    <>
      <div className="w-full flex items-center justify-center pt-44 md:pt-48 pb-20 flex-col p-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center font-semibold">
          <span className="text-[#DF6756]">India's #1 App</span> <br />
          for Hotel & Restaurant Jobs
        </h1>
        <p className="text-sm lg:text-2xl px-5 mt-4 text-center font-normal">
          Connecting job seekers with the right opportunities in the hotel and
          restaurant industry
        </p>
        <div className="mt-4 flex gap-4">
          <a href="">
            <img className="w-44" src="./images/google-play-store.png" alt="" />
          </a>
          <a href="">
            <img className="w-44" src="./images/apple-store.png" alt="" />
          </a>
        </div>
      </div>
      <InfiniteJobsCarousel/>
    </>
  );
}
