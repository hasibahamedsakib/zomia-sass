import { BsChevronRight } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ text }) => {
  return (
    <div className="font-semibold text-lg uppercase inline-block text-center pt-6">
      <nav className="flex">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 justify-center">
          <li className="inline-flex items-center">
            <Link
              to="#"
              className="inline-flex items-center text-sm font-medium  "
            >
              <HiHome className="w-4 h-4 text-white mx-1" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <BsChevronRight className="w-4 h-4 text-white mx-1" />
              <Link to="#" className="ml-1 text-sm font-medium  md:ml-2 ">
                {text}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};
// handle propType validation...
Breadcrumb.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Breadcrumb;
