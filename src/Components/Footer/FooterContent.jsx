import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaRegEnvelopeOpen,
  FaTwitter,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";

const FooterContent = () => {
  return (
    <div className="mx-10 py-8 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-4 ">
      {/* cols one */}
      <div className=" mr-3">
        {/* footer-logo */}
        <div className="">
          <img src="/photo/logo-1.png" alt="" />
        </div>
        <div className=" my-3 lg:my-6">
          <p className="leading-7">
            Sed ut perspiciatis unde omnis is natus error site voluptatem more
            accntium doloremque laudatium totam rem aperiam, eaque ipsa quae
            abventore veritatis.
          </p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li className="bg-slateBlue-0 hover:bg-white group transition-all duration-300 p-3 rounded-lg">
              <Link to="#" className="">
                {" "}
                <FaFacebookF className="text-white group-hover:text-slateBlue-0 h-5 w-5" />{" "}
              </Link>
            </li>

            <li className="bg-slateBlue-0 hover:bg-white group transition-all duration-300 p-3 rounded-lg">
              <Link to="#">
                {" "}
                <FaTwitter className="text-white group-hover:text-slateBlue-0 h-5 w-5" />{" "}
              </Link>
            </li>

            <li className="bg-slateBlue-0 hover:bg-white group transition-all duration-300 p-3 rounded-lg">
              <Link to="#">
                {" "}
                <FaPinterestP className="text-white group-hover:text-slateBlue-0 h-5 w-5" />{" "}
              </Link>
            </li>

            <li className="bg-slateBlue-0 hover:bg-white group transition-all duration-300 p-3 rounded-lg">
              <Link to="#">
                {" "}
                <FaInstagram className="text-white group-hover:text-slateBlue-0 h-5 w-5" />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* cols two */}
      <div className="lg:ml-2">
        <h5 className="text-lg sm:text-xl md:text-2xl font-bold">
          Our Services
        </h5>

        <div className="my-3 lg:my-6">
          <ul className="font-semibold space-y-3">
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> Interface Design
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> Seo Optimizer
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> Market Monitor
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-3" /> Graphic Design
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> Web Development
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* cols three */}
      <div className="">
        <h5 className="text-lg sm:text-xl md:text-2xl font-bold">
          Quick Links
        </h5>

        <div className="my-3 lg:my-6">
          <ul className="font-semibold space-y-3">
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> Latest News
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" /> How to work
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-3" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" />
                Our Media
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center hover:text-[#36bafe] transition-all duration-500"
              >
                <HiArrowNarrowRight className="mr-2" />
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* cols four */}
      <div className="">
        <h5 className="text-lg sm:text-xl md:text-2xl font-bold">
          Feel Free to Contact Us! Say Hello
        </h5>

        <div className="my-3 lg:my-6 space-y-3">
          <div className="flex items-center space-x-4">
            <div className="bg-slateBlue-0  p-3 rounded-full">
              <IoLocationSharp className="text-white  h-5 w-5" />{" "}
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">Address</h1>
              <p className=" text-sm sm:text-base">55 Main Street, New York</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-slateBlue-0  p-3 rounded-full">
              <FaRegEnvelopeOpen className="text-white  h-5 w-5" />{" "}
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold">Email Us</h1>
              <p className="text-sm sm:text-base">Example@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-slateBlue-0  p-3 rounded-full">
              <IoIosCall className="text-white  h-5 w-5" />{" "}
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold">Phone Us</h1>
              <p className="text-sm sm:text-base">+012 (345) 678 99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
