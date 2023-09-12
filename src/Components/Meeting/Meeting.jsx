import { BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

const Meeting = () => {
  return (
    <div className="bg-[url('/photo/bg.jpg')] bg-no-repeat bg-cover bg-center py-10 px-2 lg:py-0">
      <div className="Container py-5 lg:py-10 p-3 md:p-5 text-white flex items-center lg:flex-row flex-col justify-between">
        {/* Section title and description */}
        <div className="space-y-4 xl:space-y-6 flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[1.2] font-bold  leading-tight ">
            Start spending less time on your meetings
          </h1>

          <p className="text-base md:text-lg lg:text-xl pb-6">
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

        {/* section image */}
        <div className="flex-1 pb-10 md:pb-0">
          <div className="relative">
            <div className="z-[1] relative">
              <img
                src="/photo/image-1.png"
                alt="website-and_apps_image"
                className=" align-middle z-50 w-11/12 md:12/12 lg:w-[400px] ml-7 mt-6 md:ml-16 md:mt-0"
              />
            </div>
            <div className="absolute  top-10 animation-spin w-11/12 md:w-12/12 py-5 hidden lg:block">
              <img src="/photo/circle.png" className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
