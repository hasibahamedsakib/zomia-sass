import { BsGift } from "react-icons/bs";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaBullhorn } from "react-icons/fa";

const WebSiteAndApps = () => {
  return (
    <div className="bg-[#fafafa] py-5 lg:py-20 p-5 md:p-0 md:py-10">
      <div className="Container flex items-center lg:flex-row flex-col justify-between p-3 md:p-5 space-y-5 lg:space-y-0">
        {/* section image */}
        <div className="flex-1 pb-10 md:pb-0">
          <div className="relative">
            <div className="z-[1] relative">
              <img
                src="/photo/Saas-Landing-6.png"
                alt="website-and_apps_image"
                className=" align-middle z-50 lg:w-11/12 ml-7 mt-8 md:ml-0 md:mt-0"
              />
            </div>
            <div className="absolute lg:left-48 top-0 animation-bounce z-[2] w-11/12 hidden md:block">
              <img src="/photo/Saas-Landing-5.png" alt="" />
            </div>
            <div className="absolute hidden lg:block  top-10 animation-spin w-12/12">
              <img src="/photo/Saas-Landing-7.png" className="" alt="" />
            </div>
          </div>
        </div>

        {/* Section title and description */}

        <div className="space-y-4  flex-1 p-5 ">
          {/* Section Title */}
          <section className="flex items-center ">
            <SectionTitle text="Website & Apps" isBoth={false} />
          </section>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] md:leading-[1.2] font-semibold text-title-0">
            Next Generation Depends On Softwares
          </h2>

          <p className="text-lg text-Gray-0 pb-6 text-left">
            Energistically conceptualize clients-focused data and user-centric
            process Energistically communicate installed base web
          </p>

          <div className="md:flex md:justify-between items-center lg:block lg:space-y-6 md:gap-3 lg:gap-0 pb-5 md:pb-0">
            <div className="flex flex-col lg:flex-row gap-2 space-x-4 space-y-3 lg:space-y-0 items-center lg:items-top text-lg ">
              <FaBullhorn className="w-10 h-10 text-purple-0" />

              <div className="text-center lg:text-left ">
                <p className="text-xl md:2xl font-semibold text-subTitle-0 pb-2">
                  Responsive design
                </p>
                <p className="text-base text-Gray-0 sm:px-5 lg:px-0">
                  Clients-focused data centric process energistically
                  communicate installed done.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 space-x-4 space-y-3 lg:space-y-0 items-center lg:items-top text-lg text-Gray-0 ">
              <BsGift className="w-10 h-10 text-purple-0 " />

              <div className="text-center lg:text-left">
                <p className="text-xl md:2xl font-semibold text-subTitle-0 pb-2">
                  Responsive design
                </p>
                <p className="text-base text-Gray-0 sm:px-5 lg:px-0">
                  Clients-focused data centric process energistically
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

export default WebSiteAndApps;
