import SectionTitle from "../SectionTitle/SectionTitle";

const OurProcess = () => {
  return (
    <div className="container pb-5 lg:py-16 p-3 md:p-5 text-center bg-[url('/photo/service-shape-bg.png')] bg-no-repeat bg-center">
      {/* section heading */}
      <div className="flex items-center flex-col space-y-4 ">
        <SectionTitle text="Our Process" isBoth={true} />
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-subTitle-0 font-bold">
          How IT Works
        </h1>
        <p className=" text-[#646464] text-center ">
          Sit amet consectetur adipiscing elite sed eiusmod tempor incididunt ut
          labore <br /> pendisse ultrices gravidaisus commodo viva aliqua
        </p>
      </div>

      {/* Section  card Content */}
      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 pt-10 lg:gap-16">
        {/* card one */}

        <div className="relative p-3 lg:p-5 md:before:bg-[url('/photo/Saas-Landing-3.png')] md:before:w-60 before:h-10 before:bg-no-repeat md:before:-right-40 before:top-20 before:absolute">
          <h2 className="bg-[url('/photo/Saas-Landing.png')] bg-no-repeat bg-center text-white text-2xl md:text-4xl lg:text-5xl p-10 font-bold">
            01
          </h2>
          <div className="space-y-3 pt-2">
            <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
              Info Collection
            </h2>
            <p className="text-[#646464] text-center text-base">
              Proactively unleash end ends reward relationships through done
            </p>
          </div>
        </div>

        {/* card two */}
        <div className="relative p-3 lg:p-5 lg:before:bg-[url('/photo/Saas-Landing-4.png')] md:before:w-60 before:h-10 before:bg-no-repeat before:-right-40 before:top-10 before:absolute">
          <h2 className="bg-[url('/photo/Saas-Landing-1.png')] bg-no-repeat bg-center text-white text-2xl md:text-4xl p-10 font-bold">
            02
          </h2>

          <div className="space-y-3 pt-2">
            <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
              Soft Developed
            </h2>
            <p className="text-[#646464] text-center text-base">
              Proactively unleash end ends reward relationships through done
            </p>
          </div>
        </div>

        {/* card three */}
        <div className=" p-3 lg:p-5 ">
          <h2 className="bg-[url('/photo/Saas-Landing-2.png')] bg-no-repeat bg-center text-white text-2xl md:text-4xl p-10 font-bold">
            03
          </h2>
          <div className="space-y-3 pt-2">
            <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
              Got Live Demo
            </h2>
            <p className="text-[#646464] text-center text-base">
              Proactively unleash end ends reward relationships through done
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
