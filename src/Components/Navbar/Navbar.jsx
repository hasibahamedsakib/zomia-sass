import { Link, NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 100 ? "bg-[#5a49f8]" : "lg:bg-transparent";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` w-full lg:fixed   z-10  lg:px-10 lg:py-2  transition-all duration-300 ${navbarBgColor} `}
    >
      <div className="Container ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* website Logo */}
          <div className=" w-48 lg:w-40   p-4 ">
            <Link to="/">
              <img
                src="/photo/logo-1.png"
                className="hidden lg:block"
                alt="Zomia_website_logo"
              />
              <img
                src="/photo/logo.png"
                className=" lg:hidden"
                alt="Zomia_website_logo"
              />
            </Link>
          </div>
          {/* small screen size */}
          <div className="px-3 w-full lg:hidden flex justify-between text-white bg-[#5f4ff8] p-3">
            <h2 className="text-2xl uppercase font-semibold">Zomia</h2>
            <button
              className="lg:hidden block focus:outline-none "
              onClick={toggleNavbar}
            >
              {/* modal open and close */}
              {isOpen ? (
                <IoMdClose className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
          {/* All navLink are hear with active */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center  lg:space-x-3 space-x-0 flex flex-col lg:flex-row font-semibold  md:text-lg text-slate-900`}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} lg:text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} lg:text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} lg:text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/services"
            >
              Services
            </NavLink>

            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} lg:text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/page"
            >
              Page
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} lg:text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} lg:text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          {/* large device visible button and search icon */}
          <div className="hidden lg:flex space-x-5 items-center justify-center">
            <div className="group p-2 text-white   outline-none  hover:bg-white ease-in-out duration-300 rounded-lg">
              <FaSearch className=" group-hover:text-[#5a49f8] w-5 h-5 text-white " />
            </div>

            <button className="btn btn-main">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
