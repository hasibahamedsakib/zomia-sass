import SectionTitle from "../SectionTitle/SectionTitle";
import { BsArrowRight, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="bg-[url('/photo/map-2.jpg')] bg-no-repeat bg-cover bg-center py-10 px-5 lg:py-20 ">
      <div className="Container flex items-center lg:flex-row flex-col-reverse justify-between  p-3 md:p-5">
        {/* Testimonials Content */}
        <div className="flex-1 md:pl-5 ">
          {/* content-1 */}
          <div className="relative flex flex-col sm:flex-row gap-2 space-x-3 mt-10 lg:mt-0 space-y-3 md:space-y-0 items-center  items-top text-lg bg-white shadow-bxl rounded-md p-pxl m-mxl left-10 hover:left-5 lg:-left-[55px] 2xl:-left-[70px] transition-all duration-500 lg:hover:-left-[40px] 2xl:hover:-left-[50px]">
            <div className="w-20 sm:w-24 md:w-32">
              <img src="/photo/Saas-Landing-13.png" alt="" className="w-full" />
            </div>

            <div className="lg:text-left ">
              <h3 className="text-base sm:text-lg md:2xl font-semibold text-subTitle-0 pb-2">
                Anowar, Zomia CEO
              </h3>

              <p className="text-sm md:text-base text-Gray-0  mb-4">
                “Phosfluorescently e-enable front-end this Completely empower an
                expanded”
              </p>
            </div>
            <div className=" hidden sm:block absolute top-6 right-7">
              <BsTwitter className=" w-6 h-6 text-[#1da1f2]" />
            </div>
          </div>

          {/* content-2 */}
          <div className="relative flex flex-col sm:flex-row gap-2 space-x-3 space-y-3 md:space-y-0 items-center  items-top text-lg bg-white shadow-bxl rounded-md p-pxl m-mxl left-6 hover:left-3 lg:-left-[10px] transition-all duration-500 lg:hover:-left-[0px]">
            <div className="w-20 sm:w-24 md:w-32">
              <img src="/photo/Saas-Landing-12.png" alt="" className="w-full" />
            </div>

            <div>
              <h3 className="text-base md:2xl font-semibold text-subTitle-0 pb-2">
                MD Atikul,Admin
              </h3>

              <p className="text-sm md:text-base text-Gray-0  mb-4">
                “Phosfluorescently e-enable front-end this Completely empower an
                expanded”
              </p>
            </div>
            <div className=" hidden sm:block absolute top-6 right-7">
              <BsTwitter className=" w-6 h-6 text-[#1da1f2]" />
            </div>
          </div>

          {/* content-3 */}
          <div className="relative flex flex-col sm:flex-row gap-2 space-x-3 space-y-3 md:space-y-0 items-center  items-top text-lg bg-white shadow-bxl rounded-md p-pxl m-mxl left-10 hover:left-5 lg:-left-[55px] 2xl:-left-[70px] transition-all duration-500 lg:hover:-left-[40px] 2xl:hover:-left-[50px]">
            <div className="w-20 sm:w-24 md:w-32">
              <img src="/photo/Saas-Landing-14.png" alt="" className="w-full" />
            </div>

            <div>
              <h3 className="text-base md:2xl font-semibold text-subTitle-0 pb-2">
                Benatha,Manager
              </h3>

              <p className="text-sm md:text-base text-Gray-0  mb-4">
                “Phosfluorescently e-enable front-end this Completely empower an
                expanded”
              </p>
            </div>
            <div className=" hidden sm:block absolute top-6 right-7">
              <BsTwitter className=" w-6 h-6 text-[#1da1f2]" />
            </div>
          </div>
        </div>

        {/* Section title and description */}

        <div className="space-y-5 xl:space-y-7 flex-1 p-3">
          {/* Section Title */}
          <section className="flex items-center ">
            <SectionTitle text="Testimonials" isBoth={false} />
          </section>
          <h2 className="text-xl sm:text-xl  md:text-3xl lg:text-[40px] lg:leading-[1.2] font-semibold text-title-0">
            Zomia’s All Over The 23M+ Satisfied Customers
          </h2>

          <p className=" text-Gray-0 pb-6 text-left">
            Competently iterate enterprise core competencies through exceptional
            Phosfluorescently e-enable front-end data for economically sound
            teci Completely empower an expanded array of web services vis-a-vis
            interd technologies. Authoritatively promote customer directed
            scenarios in e-services. Authoritatively recaptiualize.
          </p>

          {/* Section Button */}
          <Link to="/">
            <button className="btn btn-secondary flex items-center justify-center space-x-2">
              Learn More <BsArrowRight className="h-5 w-5 ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
