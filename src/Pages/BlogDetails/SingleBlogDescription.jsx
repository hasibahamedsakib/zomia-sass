import { BiCalendar, BiLogoReddit } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { Link } from "react-router-dom";

const SingleBlogDescription = () => {
  return (
    <div>
      {/* Single Blog description */}
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

        <div className="px-6 pt-6 pb-3 text-left">
          <Link to="#">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
              Zomia Performance Very Based Saas.
            </h5>
          </Link>

          <p className="text-sm md:text-base mb-4 font-normal text-Gray-0 ">
            Sit amet consecte adipiscin eiusmod tempor service incididunt labore
            dolore ullamco laboris.sunt in culpa qui officia deserun mollit est
            there laborum. Sed ut service that perspiciatis unde omnis iste
            natus error sit voluptatem accusantium ware.
          </p>

          <p className="text-sm md:text-base mb-4 font-normal text-Gray-0 ">
            Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod
            tempor incididunt on labore et dolore. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
          <p className="text-sm md:text-base mb-4 font-normal text-Gray-0 ">
            Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est there laborum. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium ware doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia on voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos query ratione
            voluptatem sequi nesciunt. Neque porro quisquam
          </p>
          <h5 className="mb-2 mt-3 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
            Setting the mood with incense
          </h5>
          <p className="text-sm md:text-base mb-4 font-normal text-Gray-0 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor dolor an incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud there exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            poor dolor in reprehenderit in voluptate velit esse cillum
          </p>
          <h5 className="mb-2 mt-3 text-xl md:text-2xl font-bold tracking-tight hover:text-purple-0 transition-all duration-300 text-title-0">
            Setting the mood with incense
          </h5>
          <p className="text-sm md:text-base mb-4 font-normal text-Gray-0 ">
            Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est there laborum. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium ware doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia on voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos query ratione
            voluptatem sequi nesciunt. Neque porro quisquam
          </p>
        </div>

        <div className="px-6 pt-3 pb-6">
          <hr />
          <div className="py-4">
            <ul className="flex space-x-4">
              <li className=" hover:bg-slateBlue-0 bg-white group transition-all duration-300 p-2 rounded-lg border">
                <Link to="#" className="">
                  {" "}
                  <FaFacebookF className="group-hover:text-white text-subTitle-0 h-5 w-5" />{" "}
                </Link>
              </li>

              <li className=" hover:bg-slateBlue-0 bg-white group transition-all duration-300 p-2 rounded-lg border">
                <Link to="#">
                  {" "}
                  <FaTwitter className="group-hover:text-white text-subTitle-0 h-5 w-5" />{" "}
                </Link>
              </li>

              <li className=" hover:bg-slateBlue-0 bg-white group transition-all duration-300 p-2 rounded-lg border">
                <Link to="#">
                  {" "}
                  <FaPinterestP className="group-hover:text-white text-subTitle-0 h-5 w-5" />{" "}
                </Link>
              </li>

              <li className=" hover:bg-slateBlue-0 bg-white group transition-all duration-300 p-2 rounded-lg border">
                <Link to="#">
                  {" "}
                  <FaInstagram className="group-hover:text-white text-subTitle-0 h-5 w-5" />{" "}
                </Link>
              </li>
              <li className=" hover:bg-slateBlue-0 bg-white group transition-all duration-300 p-2 rounded-lg border">
                <Link to="#">
                  {" "}
                  <FaLinkedinIn className="group-hover:text-white text-subTitle-0 h-5 w-5" />{" "}
                </Link>
              </li>
              <li className=" hover:bg-slateBlue-0 bg-white group transition-all duration-300 p-2 rounded-lg border">
                <Link to="#">
                  {" "}
                  <BiLogoReddit className="group-hover:text-white text-subTitle-0 h-5 w-5" />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDescription;
