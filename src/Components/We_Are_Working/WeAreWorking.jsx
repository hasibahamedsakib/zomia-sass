import SectionTitle from "../SectionTitle/SectionTitle";
import CountUp from "react-countup";

const WeAreWorking = () => {
  return (
    <div className="Container py-10 md:py-16 lg:py-20 p-3 md:p-5 text-center">
      {/* section heading  */}
      <div className="flex items-center flex-col space-y-4">
        <SectionTitle text="We Are Working" isBoth={true} />
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[40px] text-subTitle-0 font-bold lg:leading-[1.2]">
          27000+ Oh The World Most <br /> Successful Companies With Trust
        </h1>
      </div>

      {/* section content */}
      <div className="grid items-center grid-cols-1 md:grid-cols-3  p-3 pt-10 lg:pt-20 lg:pb-10 gap-6">
        {/* First Counter */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[52px] text-[#ff3838] font-bold">
            <CountUp duration={5} end={85} />
            <span>k+</span>
          </h1>
          <h4 className="text-base md:text-lg lg:text-xl mt-5">
            Project Completed
          </h4>
        </div>
        {/* Second Counter */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[52px] text-[#5A49F8] font-bold">
            <CountUp duration={4} end={285} />
          </h1>
          <h4 className="text-base md:text-lg lg:text-xl mt-5">
            Support Member
          </h4>
        </div>
        {/* Third Counter */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[52px] text-[#24B5FF] font-bold">
            <CountUp duration={4.8} end={100} />
            <span>k+</span>
          </h1>
          <h4 className="text-base md:text-lg lg:text-xl mt-5">
            Clients Worldwide
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WeAreWorking;
