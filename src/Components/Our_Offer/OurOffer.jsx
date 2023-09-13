import SectionTitle from "../SectionTitle/SectionTitle";

const OurOffer = () => {
  return (
    <div className="bg-[#fafafa]  pb-5 py-10 md:py-16 xl:py-20 2xl:py-24 p-3 md:p-5 text-center">
      <div className="Container">
        {/* section heading */}
        <div className="flex items-center flex-col space-y-4 xl:space-y-6">
          <SectionTitle text="What We Offer" isBoth={true} />
          <h1 className="text-2xl md:text-4xl lg:text-[40px] text-subTitle-0 font-bold">
            Let’s Check Our Services
          </h1>
          <p className=" text-Gray-0 text-center ">
            Sit amet consectetur adipiscing elite sed eiusmod tempor incididunt
            ut labore <br /> pendisse ultrices gravidaisus commodo viva aliqua
          </p>
        </div>
        {/* Section  card Content */}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 pt-10 lg:pt-20 gap-6">
          {/* card one */}
          <div className="rounded-lg p-5 bg-white hover:shadow-3xl transition-all duration-500 ease-in-out text-center ">
            <div className="bg-[url('/photo/ff6.png')] bg-no-repeat bg-center p-10 flex items-center justify-center  mx-auto rounded-full">
              <img src="/photo/f1.png" className="" alt="" />
            </div>

            <div className="space-y-3 pt-2 pb-10">
              <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
                Digital Marketing
              </h2>
              <p className="text-Gray-0 text-center text-base sm:px-20 md:px-0">
                Proactively unleash end ends reward relationships through done
              </p>
            </div>
          </div>
          {/* card two */}
          <div className="rounded-lg p-5 bg-white hover:shadow-3xl transition-all duration-500 ease-in-out text-center ">
            <div className="bg-[url('/photo/ff5.png')] bg-no-repeat bg-center p-10 flex items-center justify-center  mx-auto rounded-full">
              <img src="/photo/f2.png" className="" alt="" />
            </div>

            <div className="space-y-3 pt-2 pb-10">
              <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
                Video Chat Website
              </h2>
              <p className="text-Gray-0 text-center text-base sm:px-20 md:px-0">
                Proactively unleash end ends reward relationships through done
              </p>
            </div>
          </div>

          {/* ``````````````````````````` 
                  Replaceable card 2. When if needed..!!
                  `````````````````````````````````*/}

          {/* <div className="relative rounded-lg p-5 bg-white hover:shadow-3xl transition-all duration-500 ease-in-out text-center h-[300px] flex flex-col items-center">
            <div className=" text-center">
              <img
                src="/photo/ff6.png"
                className="border-2 border-red-500 relative top-1"
                alt=""
              />
            </div>

            <div className="absolute top-12 text-center ">
              <img src="/photo/f2.png " alt="" />
            </div>
            <div className="space-y-3 mt-16 pb-10">
              <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
                Digital Marketing
              </h2>
              <p className="text-[#646464] text-center text-base">
                Proactively unleash end ends reward relationships through done
              </p>
            </div>
          </div> */}

          {/* card three */}
          <div className="rounded-lg p-5 bg-white hover:shadow-3xl transition-all duration-500 ease-in-out text-center ">
            <div className="bg-[url('/photo/ff3.png')] bg-no-repeat bg-center p-10 flex items-center justify-center  mx-auto rounded-full">
              <img src="/photo/f3.png" className="" alt="" />
            </div>
            <div className="space-y-3 pt-2 pb-10">
              <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
                Mobile Application
              </h2>
              <p className="text-Gray-0 text-center text-base sm:px-20 md:px-0">
                Proactively unleash end ends reward relationships through done
              </p>
            </div>
          </div>

          {/* card four */}
          <div className="rounded-lg p-5 bg-white hover:shadow-3xl transition-all duration-500 ease-in-out text-center ">
            <div className="bg-[url('/photo/ff1.png')] bg-no-repeat bg-center p-10 flex items-center justify-center  mx-auto rounded-full">
              <img src="/photo/f4.png" className="" alt="" />
            </div>
            <div className="space-y-3 pt-2 pb-10">
              <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
                Graphic Design
              </h2>
              <p className="text-Gray-0 text-center text-base sm:px-20 md:px-0">
                Proactively unleash end ends reward relationships through done
              </p>
            </div>
          </div>

          {/* card five */}
          <div className="rounded-lg p-5 bg-white hover:shadow-3xl transition-all duration-500 ease-in-out text-center ">
            <div className="bg-[url('/photo/ff2.png')] bg-no-repeat bg-center p-10 flex items-center justify-center  mx-auto rounded-full">
              <img src="/photo/f1.png" className="" alt="" />
            </div>
            <div className="space-y-3 pt-2 pb-10">
              <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
                SEO Tools Developed
              </h2>
              <p className="text-Gray-0 text-center text-base sm:px-20 md:px-0">
                Proactively unleash end ends reward relationships through done
              </p>
            </div>
          </div>
          {/* card sixth */}
          <div className="rounded-lg p-5 bg-white hover:shadow-3xl transition-all duration-500 ease-in-out text-center ">
            <div className="bg-[url('/photo/ff6.png')] bg-no-repeat bg-center p-10 flex items-center justify-center  mx-auto rounded-full">
              <img src="/photo/f6.png" className="" alt="" />
            </div>
            <div className="space-y-3 pt-2 pb-10">
              <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
                Database Design
              </h2>
              <p className="text-Gray-0 text-center text-base sm:px-20 md:px-0">
                Proactively unleash end ends reward relationships through done
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
