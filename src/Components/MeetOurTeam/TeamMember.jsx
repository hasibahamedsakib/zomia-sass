import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamMember = () => {
  return (
    <>
      {/* card one */}
      <div className="rounded-lg p-5 bg-white shadow-3xl transition-all duration-500 ease-in-out text-center hover:-translate-y-3 overflow-hidden group">
        <div className="flex flex-col items-end relative">
          <div className="w-full relative before:absolute before:w-full before:h-full before:bg-[#740fd7] before:top-0 before:left-0 before:right-0 before:opacity-0 before:group-hover:opacity-30 before:transition-all before:duration-500">
            <img src="/photo/t1.jpg" className="w-full rounded-md" alt="" />
          </div>
          <div className=" bg-white p-3 rounded-sm absolute top-32 -right-20 group-hover:right-0 transition-all duration-500">
            <ul className="space-y-3">
              <li>
                <a href="#">
                  <FaFacebookF className="w-5 h-5 text-purple-0" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="w-5 h-5 text-purple-0" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="w-5 h-5 text-purple-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 pt-4 ">
          <h2 className="text-xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
            John M. Anthony
          </h2>
          <p className="text-purple-0 text-center text-base">Web Developer</p>
        </div>
      </div>
      {/* card two */}
      <div className="rounded-lg p-5 bg-white shadow-3xl transition-all duration-500 ease-in-out text-center hover:-translate-y-3 overflow-hidden group">
        <div className="flex flex-col items-end relative">
          <div className="w-full relative before:absolute before:w-full before:h-full before:bg-[#740fd7] before:top-0 before:left-0 before:right-0 before:opacity-0 before:group-hover:opacity-30 before:transition-all before:duration-500">
            <img src="/photo/t2.jpg" className="w-full rounded-md" alt="" />
          </div>
          <div className=" bg-white p-3 rounded-sm absolute top-32 -right-20 group-hover:right-0 transition-all duration-500">
            <ul className="space-y-3">
              <li>
                <a href="#">
                  <FaFacebookF className="w-5 h-5 text-purple-0" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="w-5 h-5 text-purple-0" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="w-5 h-5 text-purple-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 pt-4 ">
          <h2 className="text-xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
            John M. Anthony
          </h2>
          <p className="text-purple-0 text-center text-base">Web Developer</p>
        </div>
      </div>

      {/* card three */}
      <div className="rounded-lg p-5 bg-white shadow-3xl transition-all duration-500 ease-in-out text-center hover:-translate-y-3 overflow-hidden group">
        <div className="flex flex-col items-end relative">
          <div className="w-full relative before:absolute before:w-full before:h-full before:bg-[#740fd7] before:top-0 before:left-0 before:right-0 before:opacity-0 before:group-hover:opacity-30 before:transition-all before:duration-500">
            <img src="/photo/t3.jpg" className="w-full rounded-md" alt="" />
          </div>
          <div className=" bg-white p-3 rounded-sm absolute top-32 -right-20 group-hover:right-0 transition-all duration-500">
            <ul className="space-y-3">
              <li>
                <a href="#">
                  <FaFacebookF className="w-5 h-5 text-purple-0" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="w-5 h-5 text-purple-0" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="w-5 h-5 text-purple-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 pt-4 ">
          <h2 className="text-xl font-bold text-subTitle-0 hover:text-purple-0 transition-all duration-300">
            John M. Anthony
          </h2>
          <p className="text-purple-0 text-center text-base">Web Developer</p>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
