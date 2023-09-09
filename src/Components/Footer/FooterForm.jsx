import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterForm = () => {
  return (
    <div className="mx-10 flex flex-col md:flex-row items-center justify-between bg-white px-10 py-8 rounded-lg space-y-4 lg:space-y-0">
      <div className=" text-title-0">
        <h1 className="text3xl md:text-2xl lg:text-[27px] font-bold">
          Subscribe Our Newsletter To <br />
          Get More Updates
        </h1>
      </div>
      <div className=" ">
        <form className="flex items-center space-x-2 md:space-x-5">
          <input
            placeholder="Enter Your Email"
            type="text"
            className=" px-5 py-[5px] w-fit lg:w-[320px] h-14 text-base bg-[#EEECFE] rounded-md text-[#333] focus:outline-none placeholder:text-[#333]"
          />
          <Link to="/">
            <button className="btn btn-signUp flex items-center justify-center lg:space-x-2">
              Sign Up <BsArrowRight className="lg:h-5 lg:w-5 ml-1 lg:ml-3" />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
