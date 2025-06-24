import InfiniteJobsCarousel from "./InfiniteJobsCarousel";

export default function Hero() {
  return (
    <>
      <div className="container flex items-center justify-center pt-48 pb-20 flex-col p-6">
        <h1 className="text-2xl md:text-5xl lg:text-7xl text-center font-normal">
          India's #1 App <br />
          for Hotel & Restaurant Jobs
        </h1>
        <p className="text-sm px-5 mt-4 text-center">
          Connecting job seekers with the right opportunities in the hotel and
          restaurant industry
        </p>
        <div className="mt-4 flex gap-4">
          <a href="">
            <img className="w-36" src="./images/google-play-store.png" alt="" />
          </a>
          <a href="">
            <img className="w-36" src="./images/apple-store.png" alt="" />
          </a>
        </div>
      </div>
      <InfiniteJobsCarousel/>

    </>
  );
}
