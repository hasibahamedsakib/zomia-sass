import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BiCalendar, BiChevronRight } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="bg-[#fafafa]  py-10 md:py-16 lg:py-20 p-3  text-center">
      <div className="Container">
        {/* section heading  */}
        <div className="flex items-center flex-col space-y-4 ">
          <SectionTitle text="Our Blog" isBoth={true} />
          <h1 className="text-2xl md:text-4xl lg:text-[40px] text-subTitle-0 font-bold lg:leading-[1.2]">
            The Latest from our Blog
          </h1>
          <p className=" text-Gray-0 text-center ">
            Sit amet consectetur adipiscing elite sed eiusmod tempor incididunt
            ut labore <br /> pendisse ultrices gravidaisus commodo viva aliqua
          </p>
        </div>
        {/* Section  blog Content */}

        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 pt-10 lg:pt-20 gap-6">
          {/* Blog One */}
          <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
            <Link to="#">
              <img
                className="rounded-t-lg w-full"
                src="/photo/blog1.png"
                alt=""
              />
            </Link>

            <div className="flex justify-between items-center  py-5 mx-5 border-b-2 ">
              <span className="flex items-center space-x-1 sm:space-x-1 md:  ">
                <BiCalendar className="w-3 h-3 sm:w-5 sm:h-5 text-purple-0" />
                <p className="hover:text-purple-0 text-sm sm:text-base">
                  07, March, 2023
                </p>
              </span>
              <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>

              <span className="flex items-center space-x-1 sm:space-x-2  ">
                <FaRegComments className="text-purple-0" />
                <p className="hover:text-purple-0 text-sm sm:text-base">
                  Comment (5)
                </p>
              </span>
            </div>

            <div className="p-6 text-left">
              <Link to="#">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
                  Noteworthy technology acquisitions 2021
                </h5>
              </Link>
              <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <Link className="mb-3 flex items-center underline text-purple-0 font-semibold group text-left transition-all duration-300 underline-offset-4">
                Learn More
                <span className="group-hover:ml-3 duration-300">
                  <BiChevronRight className="h-5 w-5 mt-1  text-purple-0 " />
                </span>
              </Link>
            </div>
          </div>
          {/* Blog two */}
          <div className="max-w-sm mx-auto md:max-w-md  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
            <Link to="#">
              <img
                className="rounded-t-lg w-full"
                src="/photo/blog2.png"
                alt=""
              />
            </Link>

            <div className="flex justify-between items-center py-5 mx-5 border-b-2 ">
              <span className="flex items-center space-x-1 sm:space-x-2  ">
                <BiCalendar className="w-3 h-3 sm:w-5 sm:h-5 text-purple-0" />
                <p className="hover:text-purple-0 text-sm sm:text-base">
                  07, March, 2023
                </p>
              </span>
              <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>

              <span className="flex items-center space-x-1 sm:space-x-2  ">
                <FaRegComments className="text-purple-0" />
                <p className="hover:text-purple-0 text-sm sm:text-base">
                  Comment (5)
                </p>
              </span>
            </div>

            <div className="p-6 text-left">
              <Link to="#">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
                  Overcame breeding or my concerns removing
                </h5>
              </Link>
              <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <Link className="mb-3 flex items-center underline text-purple-0 font-semibold group text-left transition-all duration-300 underline-offset-4">
                Learn More
                <span className="group-hover:ml-3 duration-300">
                  <BiChevronRight className="h-5 w-5 mt-1  text-purple-0 " />
                </span>
              </Link>
            </div>
          </div>
          {/* Blog three */}
          <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
            <Link to="#">
              <img
                className="rounded-t-lg w-full"
                src="/photo/blog3.png"
                alt=""
              />
            </Link>

            <div className="flex justify-between items-center py-5 mx-5 border-b-2 ">
              <span className="flex items-center space-x-1 md:space-x-2">
                <BiCalendar className="w-3 h-3 sm:w-5 sm:h-5 text-purple-0" />
                <p className="hover:text-purple-0 text-sm sm:text-base">
                  07, March, 2023
                </p>
              </span>
              <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>

              <span className="flex items-center space-x-1 sm:space-x-1 md:space-x-2  ">
                <FaRegComments className="text-purple-0 w-3 h-3 sm:w-5 sm:h-5" />
                <p className="hover:text-purple-0 text-sm sm:text-base">
                  Comment (5)
                </p>
              </span>
            </div>

            <div className="p-6 text-left">
              <Link to="#">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
                  Made neat an on be gave shoe nugh tore
                </h5>
              </Link>
              <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <Link className="mb-3 flex items-center underline text-purple-0 font-semibold group text-left transition-all duration-300 underline-offset-4">
                Learn More
                <span className="group-hover:ml-3 duration-300">
                  <BiChevronRight className="h-5 w-5 mt-1  text-purple-0 " />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
