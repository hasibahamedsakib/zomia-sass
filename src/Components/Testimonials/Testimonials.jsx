import SectionTitle from "../SectionTitle/SectionTitle";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="bg-[url('/photo/map-2.jpg')] bg-no-repeat bg-cover bg-center py-10 px-2 lg:py-20 ">
      <div className="container flex items-center lg:flex-row flex-col justify-between  p-3 md:p-5">
        {/* Testimonials Content */}
        <div className="flex-1 pb-10 md:pb-0">
          <div className="w-[620px] h-10 border"></div>
        </div>

        {/* Section title and description */}

        <div className="space-y-4 flex-1 p-3">
          {/* Section Title */}
          <section className="flex items-center ">
            <SectionTitle text="Testimonials" isBoth={false} />
          </section>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] leading-9 font-semibold text-title-0">
            Zomia’s All Over The 23M+ Satisfied Customers
          </h2>

          <p className=" text-Gray-0 pb-5 text-left">
            Competently iterate enterprise core competencies through exceptional
            Phosfluorescently e-enable front-end data for economically sound
            teci Completely empower an expanded array of web services vis-a-vis
            interd technologies. Authoritatively promote customer directed
            scenarios in e-services. Authoritatively recaptiualize.
          </p>

          {/* Section Button */}
          <Link to="/">
            <button className="btn-primary flex items-center justify-center space-x-2">
              Learn More <BsArrowRight className="h-5 w-5 ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
