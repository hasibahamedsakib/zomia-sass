import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SingleBlog from "./SingleBlog";

const ListedBlogs = () => {
  return (
    <div className="Container py-10 px-3 lg:py-20">
      <div className="grid grid-cols-6 gap-6">
        {/* All Blogs are Here */}
        <div className="col-span-6 md:col-span-3 lg:col-span-4 space-y-4">
          <SingleBlog />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-6">
          {/* blog searchbar  */}
          <div className="border items-center w-full p-8 shadow-hblg rounded-md">
            <form className="flex items-center space-x-2 md:space-x-5 relative">
              <input
                placeholder="Search Here"
                type="text"
                className=" px-5 py-[5px] w-full  h-14 text-base rounded-md text-[#333] focus:outline-none placeholder:text-[#333] "
              />
              <Link to="#" className="absolute top-5 right-4 text-Gray-0">
                <FaSearch className="w-5 h-5 " />
              </Link>
            </form>
          </div>
          {/* blog sidebar*/}
          <div className="w-full p-8 shadow-hblg space-y-4 rounded-md">
            <Link to="/blog_details" className="space-x-3 flex items-center">
              <img
                src="/photo/blog1.png"
                className="rounded-md w-[85px] h-[75px]"
                alt=""
              />
              <div className="text-left">
                <h4 className="text-base font-bold text-subTitle-0">
                  3D CSS Flippy Snaps With GreenSocks
                </h4>
                <p className="text-sm text-Gray-0">10 Jan, 2022</p>
              </div>
            </Link>
            <Link to="/blog_details" className="space-x-3 flex items-center">
              <img
                src="/photo/blog3.png"
                className="rounded-md w-[85px] h-[75px]"
                alt=""
              />
              <div className="text-left">
                <h4 className="text-base font-bold text-subTitle-0">
                  3D CSS Flippy Snaps With GreenSocks
                </h4>
                <p className="text-sm text-Gray-0">10 Jan, 2022</p>
              </div>
            </Link>
            <Link to="/blog_details" className="space-x-3 flex items-center">
              <img
                src="/photo/blog2.png"
                className="rounded-md w-[85px] h-[75px]"
                alt=""
              />
              <div className="text-left">
                <h4 className="text-base font-bold text-subTitle-0">
                  3D CSS Flippy Snaps With GreenSocks
                </h4>
                <p className="text-sm text-Gray-0">10 Jan, 2022</p>
              </div>
            </Link>
            <Link to="/blog_details" className="space-x-3 flex items-center">
              <img
                src="/photo/blog3.png"
                className="rounded-md w-[85px] h-[75px]"
                alt=""
              />
              <div className="text-left">
                <h4 className="text-base font-bold text-subTitle-0">
                  3D CSS Flippy Snaps With GreenSocks
                </h4>
                <p className="text-sm text-Gray-0">10 Jan, 2022</p>
              </div>
            </Link>
            <Link to="/blog_details" className="space-x-3 flex items-center">
              <img
                src="/photo/blog1.png"
                className="rounded-md w-[85px] h-[75px]"
                alt=""
              />
              <div className="text-left">
                <h4 className="text-base font-bold text-subTitle-0">
                  3D CSS Flippy Snaps With GreenSocks
                </h4>
                <p className="text-sm text-Gray-0">10 Jan, 2022</p>
              </div>
            </Link>
          </div>
          {/* Categori Sidebar */}
          <div className="w-full p-8 shadow-hblg rounded-md">
            <h4 className="text-lg font-bold text-subTitle-0 py-3">
              Categories
            </h4>
            <div className="relative pb-2">
              <hr className="w-20 h-[2px] bg-slate-400" />
              <span className="w-[8px] h-[8px] bg-purple-0 rounded-full absolute -top-[3px] animation-move"></span>
            </div>
            <Link to="/blog_list">
              <p className="text-Gray-0 py-2 border-b-2">Design</p>
            </Link>
            <Link to="/blog_list">
              <p className="text-Gray-0 py-2 border-b-2">Development</p>
            </Link>
            <Link to="/blog_list">
              <p className="text-Gray-0 py-2 border-b-2">Merketing</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBlogs;
