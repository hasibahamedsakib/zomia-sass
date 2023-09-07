import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BiCalendar, BiChevronRight } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="bg-[#fafafa]  pb-5 py-5  lg:py-16 p-3 md:p-5 text-center">
      <div className="Container">
        {/* section heading  */}
        <div className="flex items-center flex-col space-y-4 ">
          <SectionTitle text="Our Blog" isBoth={true} />
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-subTitle-0 font-bold">
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
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg  transition-all duration-300 scale-[1.02] hover:scale-100 hover:shadow-lg">
            <Link to="#">
              <img className="rounded-t-lg" src="/photo/blog1.png" alt="" />
            </Link>

            <div className="flex justify-between items-center py-5 mx-5 border-b-2 ">
              <span className="flex items-center space-x-2  ">
                <BiCalendar className="text-purple-0" />
                <p className="hover:text-purple-0">07, March, 2023</p>
              </span>
              <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>

              <span className="flex items-center space-x-2  ">
                <FaRegComments className="text-purple-0" />
                <p className="hover:text-purple-0">Comment (5)</p>
              </span>
            </div>

            <div className="p-5 text-left">
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
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg  transition-all duration-300">
            <Link to="#">
              <img className="rounded-t-lg" src="/photo/blog2.png" alt="" />
            </Link>

            <div className="flex justify-between items-center py-5 mx-5 border-b-2 ">
              <span className="flex items-center space-x-2  ">
                <BiCalendar className="text-purple-0" />
                <p className="hover:text-purple-0">07, March, 2023</p>
              </span>
              <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>

              <span className="flex items-center space-x-2  ">
                <FaRegComments className="text-purple-0" />
                <p className="hover:text-purple-0">Comment (5)</p>
              </span>
            </div>

            <div className="p-5 text-left">
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
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg  transition-all duration-300">
            <Link to="#">
              <img className="rounded-t-lg" src="/photo/blog3.png" alt="" />
            </Link>

            <div className="flex justify-between items-center py-5 mx-5 border-b-2 ">
              <span className="flex items-center space-x-2  ">
                <BiCalendar className="text-purple-0" />
                <p className="hover:text-purple-0">07, March, 2023</p>
              </span>
              <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>

              <span className="flex items-center space-x-2  ">
                <FaRegComments className="text-purple-0" />
                <p className="hover:text-purple-0">Comment (5)</p>
              </span>
            </div>

            <div className="p-5 text-left">
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
