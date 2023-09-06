import SectionTitle from "../SectionTitle/SectionTitle";

const OurOffer = () => {
  return (
    <div className="bg-[#fafafa] container pb-5 lg:py-16 p-3 md:p-5 text-center">
      {/* section heading */}
      <div className="flex items-center flex-col space-y-4 ">
        <SectionTitle text="What We Offer" isBoth={true} />
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-subTitle-0 font-bold">
          Let’s Check Our Services
        </h1>
        <p className=" text-[#646464] text-center ">
          Sit amet consectetur adipiscing elite sed eiusmod tempor incididunt ut
          labore <br /> pendisse ultrices gravidaisus commodo viva aliqua
        </p>
      </div>

      {/* Section  card Content */}
      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 pt-10 lg:gap-16">
        {/* card one */}

        <div className=" p-3 lg:p-5 bg-white hover:shadow-2xl ">
          <img src="" alt="" />
          <div className="space-y-3 pt-2">
            <h2 className="text-xl md:text-2xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
              Digital Marketing
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

export default OurOffer;
