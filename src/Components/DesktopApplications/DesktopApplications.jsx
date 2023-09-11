import { BsFillCheckCircleFill } from "react-icons/bs";
import SectionTitle from "../SectionTitle/SectionTitle";

const DesktopApplications = () => {
  return (
    <div className="py-5 lg:pt-20 lg:pb-10 p-5 md:p-0">
      <div className="Container flex items-center flex-col-reverse lg:flex-row-reverse justify-between p-3 md:p-5 ">
        {/* section image */}
        <div className="flex-1 pb-5 md:pb-0 pt-10 lg:pt-0">
          <div className="w-12/12 animation-bounce">
            <img src="/photo/Saas-Landing-8.png" className="" alt="" />
          </div>
        </div>

        <div className="space-y-4 flex-1 p-3 ">
          {/* Section Title and description */}
          <section className="flex items-center ">
            <SectionTitle text="Desktop Applications" isBoth={false} />
          </section>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] leading-9 font-semibold text-title-0">
            Get Maximum Customer of Any Business
          </h2>

          <p className="text-lg text-Gray-0 pb-5 text-left">
            energetically conceptualize clients-focused data and user-centric
            process energetically communicate installed base web
          </p>
          {/* Section  content */}
          <div className="space-y-6 pb-5">
            <div className="group flex flex-col lg:flex-row gap-2 space-x-3 space-y-3 lg:space-y-0 items-center lg:items-start lg:items-top text-lg ">
              <BsFillCheckCircleFill className="w-6 lg:w-7 h-6 lg:h-7 text-purple-0 group-hover:text-[#ff930e] transition-all duration-300 lg:mt-2 p-[2px]" />

              <div className=" text-center lg:text-left ">
                <p className="text-xl md:2xl font-semibold text-subTitle-0 pb-2">
                  Awesome Support
                </p>
                <p className="text-base text-Gray-0">
                  Clients-focused data centric process energetically <br />
                  communicate installed done.
                </p>
              </div>
            </div>

            <div className=" group flex flex-col lg:flex-row gap-2 space-x-3 space-y-3 lg:space-y-0 items-center lg:items-start lg:items-top text-lg text-Gray-0 ">
              <BsFillCheckCircleFill className="w-6 lg:w-7 h-6 lg:h-7 text-purple-0 group-hover:text-[#ff930e] transition-all duration-300 lg:mt-2 p-[2px]" />

              <div className="text-center lg:text-left">
                <p className="text-xl md:2xl font-semibold text-subTitle-0 pb-2">
                  Market Research
                </p>
                <p className="text-base text-Gray-0">
                  Clients-focused data centric process energetically <br />
                  communicate installed done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopApplications;
