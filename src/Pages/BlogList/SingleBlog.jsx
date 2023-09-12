import { BiCalendar } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const SingleBlog = () => {
  const { pathname } = useLocation();
  return (
    <>
      {/* blogs one */}
      <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
        <Link to="#">
          <img className="rounded-t-lg w-full" src="/photo/blog1.png" alt="" />
        </Link>

        <div className="flex space-x-2 items-center  py-5 mx-5 border-b-2 ">
          <span className="flex items-center space-x-2  ">
            <GrDocumentText />
            <p className="hover:text-purple-0">zomia_saas</p>
          </span>
          <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
          <span className="flex items-center space-x-2  ">
            <BiCalendar />
            <p className="hover:text-purple-0">07, March, 2023</p>
          </span>
        </div>

        <div className="p-6 text-left">
          <Link to="/blog_details">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
              Zomia Performance Very Based Saas.
            </h5>
          </Link>
          {pathname == "/blog_list" ? (
            <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
              Sit amet consecte adipiscin eiusmod tempor service incididunt
              labore dolore ullamco laboris.sunt in culpa qui officia deserun
              mollit est there laborum. Sed ut service that perspiciatis unde
              omnis iste natus error sit voluptatem accusantium ware.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* blogs two */}
      <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
        <Link to="#">
          <img className="rounded-t-lg w-full" src="/photo/blog2.png" alt="" />
        </Link>

        <div className="flex space-x-2 items-center  py-5 mx-5 border-b-2 ">
          <span className="flex items-center space-x-2  ">
            <GrDocumentText />
            <p className="hover:text-purple-0">zomia_saas</p>
          </span>
          <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
          <span className="flex items-center space-x-2  ">
            <BiCalendar />
            <p className="hover:text-purple-0">07, March, 2023</p>
          </span>
        </div>

        <div className="p-6 text-left">
          <Link to="/blog_details">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
              Overcame breeding or my concerns removing
            </h5>
          </Link>
          {pathname == "/blog_list" ? (
            <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
              Sit amet consecte adipiscin eiusmod tempor service incididunt
              labore dolore ullamco laboris.sunt in culpa qui officia deserun
              mollit est there laborum. Sed ut service that perspiciatis unde
              omnis iste natus error sit voluptatem accusantium ware.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* blogs three */}
      <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
        <Link to="#">
          <img className="rounded-t-lg w-full" src="/photo/blog1.png" alt="" />
        </Link>

        <div className="flex space-x-2 items-center  py-5 mx-5 border-b-2 ">
          <span className="flex items-center space-x-2  ">
            <GrDocumentText />
            <p className="hover:text-purple-0">zomia_saas</p>
          </span>
          <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
          <span className="flex items-center space-x-2  ">
            <BiCalendar />
            <p className="hover:text-purple-0">07, March, 2023</p>
          </span>
        </div>

        <div className="p-6 text-left">
          <Link to="/blog_details">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
              Made neat an on be gave shoe nugh tore
            </h5>
          </Link>
          {pathname == "/blog_list" ? (
            <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
              Sit amet consecte adipiscin eiusmod tempor service incididunt
              labore dolore ullamco laboris.sunt in culpa qui officia deserun
              mollit est there laborum. Sed ut service that perspiciatis unde
              omnis iste natus error sit voluptatem accusantium ware.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* blogs four */}
      <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
        <Link to="#">
          <img className="rounded-t-lg w-full" src="/photo/blog3.png" alt="" />
        </Link>

        <div className="flex space-x-2 items-center  py-5 mx-5 border-b-2 ">
          <span className="flex items-center space-x-2  ">
            <GrDocumentText />
            <p className="hover:text-purple-0">zomia_saas</p>
          </span>
          <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
          <span className="flex items-center space-x-2  ">
            <BiCalendar />
            <p className="hover:text-purple-0">07, March, 2023</p>
          </span>
        </div>

        <div className="p-6 text-left">
          <Link to="/blog_details">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
              Zomia Performance Very Based Saas.
            </h5>
          </Link>
          {pathname == "/blog_list" ? (
            <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
              Sit amet consecte adipiscin eiusmod tempor service incididunt
              labore dolore ullamco laboris.sunt in culpa qui officia deserun
              mollit est there laborum. Sed ut service that perspiciatis unde
              omnis iste natus error sit voluptatem accusantium ware.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* blogs five */}
      <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
        <Link to="#">
          <img className="rounded-t-lg w-full" src="/photo/blog2.png" alt="" />
        </Link>

        <div className="flex space-x-2 items-center  py-5 mx-5 border-b-2 ">
          <span className="flex items-center space-x-2  ">
            <GrDocumentText />
            <p className="hover:text-purple-0">zomia_saas</p>
          </span>
          <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
          <span className="flex items-center space-x-2  ">
            <BiCalendar />
            <p className="hover:text-purple-0">07, March, 2023</p>
          </span>
        </div>

        <div className="p-6 text-left">
          <Link to="/blog_details">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
              Made neat an on be gave shoe nugh tore
            </h5>
          </Link>
          {pathname == "/blog_list" ? (
            <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
              Sit amet consecte adipiscin eiusmod tempor service incididunt
              labore dolore ullamco laboris.sunt in culpa qui officia deserun
              mollit est there laborum. Sed ut service that perspiciatis unde
              omnis iste natus error sit voluptatem accusantium ware.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* blogs Six */}
      <div className="max-w-sm mx-auto md:max-w-fit  bg-white border border-gray-200 rounded-lg  transition-all duration-500 ease-in-out shadow-blg  hover:shadow-hblg">
        <Link to="#">
          <img className="rounded-t-lg w-full" src="/photo/blog2.png" alt="" />
        </Link>

        <div className="flex space-x-2 items-center  py-5 mx-5 border-b-2 ">
          <span className="flex items-center space-x-2  ">
            <GrDocumentText />
            <p className="hover:text-purple-0">zomia_saas</p>
          </span>
          <span className="w-[6px] h-[6px] bg-slate-400 rounded-full"></span>
          <span className="flex items-center space-x-2  ">
            <BiCalendar />
            <p className="hover:text-purple-0">07, March, 2023</p>
          </span>
        </div>

        <div className="p-6 text-left">
          <Link to="/blog_details">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
              Overcame breeding or my concerns removing
            </h5>
          </Link>
          {pathname == "/blog_list" ? (
            <p className="text-sm md:text-base mb-3 font-normal text-Gray-0 ">
              Sit amet consecte adipiscin eiusmod tempor service incididunt
              labore dolore ullamco laboris.sunt in culpa qui officia deserun
              mollit est there laborum. Sed ut service that perspiciatis unde
              omnis iste natus error sit voluptatem accusantium ware.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
