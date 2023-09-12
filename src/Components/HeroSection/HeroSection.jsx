import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="bg-[url('/photo/hero-bg.jpg')] bg-center py-10 bg-cover h-[900px]">
      <div className="flex items-center lg:flex-row flex-col  p-3 md:p-5 Container py-5 lg:my-40 space-y-6 md:space-y-8 ">
        {/* hero text */}
        <div className="relative lg:left-1 xl:-left-[60px] space-y-3 sm:space-y-5 lg:space-y-6  flex-1 text-white xl:w-[540px] w-11/12">
          <div className="flex space-x-4 items-center md:11/12 xl:w-[540px]">
            <img src="/photo/star.png" alt="" />
            <p className="text-[17px] font-bold">WE ARE ZOMIA AGENCY</p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:5xl xl:text-[65px] xl:leading-[70px] font-bold  leading-tight w-11/12 xl:w-[540px]">
            Make your life Easier width the Smart Sass
          </h1>

          <p className="text-base md:text-lg lg:text-xl pb-3 lg:pb-7">
            Continually morph intermandated synergy for fully the
            Phosfluorescently strategize done
          </p>
          {/* Hero Button  */}
          <Link to="/">
            <button className="btn btn-primary flex items-center justify-center space-x-2">
              Learn More <BsArrowRight className="h-5 w-5 ml-3" />
            </button>
          </Link>
        </div>

        {/* hero image */}
        <div className=" ">
          <div className="relative lg:left-[-25px] xl:-left-[75px] w-12/12  md:w-[600px] lg:w-[600px] xl:w-[750px]  ">
            <div className="absolute hidden lg:block -top-20  lg:left-[170px] xl:left-[295px] animation-bounce">
              <img src="/photo/s3.png" alt="" />
            </div>
            <div className="absolute hidden lg:block md:-top-28 md:right-52 animation-spin">
              <img src="/photo/s4.png" alt="" />
            </div>
            <div className="absolute hidden lg:block md:top-0 md:right-2 animation-bounce">
              <img src="/photo/s5.png" alt="" />
            </div>

            <img
              src="/photo/s6.png"
              alt="website-hero_image"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
