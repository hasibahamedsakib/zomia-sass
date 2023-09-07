import { FaEdit } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const ChooseUs = () => {
  return (
    <div className="bg-[#f8f8ff]">
      <div className="Container py-5 lg:py-20 p-3 md:p-5">
        <div className="text-center space-y-4">
          <SectionTitle text="WHY CHOOSE US" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 font-bold">
            More Awesome Services
          </h1>
          <p className=" text-slate-600 text-center">
            Web-enabled deliverables without enterprise strategic theme areas
            ourland <br /> backward-compatible process improvements
          </p>
        </div>

        {/* chose us content text */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="single-choose">
            <div className="single-choose-inner d-flex align-items-center">
              <div className="choose-icon one">
                <FaEdit />
              </div>
              <div className="choose-content">
                <div className="choose-title">
                  <h4>Easy Customize</h4>
                </div>
                <div className="choose-description">
                  <p>
                    Dramatical res business you member developer productivate
                    bricks architeh landing designer process improvents
                    nastional.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-choose">
            <div className="single-choose-inner d-flex align-items-center">
              <div className="choose-icon one">
                <FaEdit />
              </div>
              <div className="choose-content">
                <div className="choose-title">
                  <h4>Easy Customize</h4>
                </div>
                <div className="choose-description">
                  <p>
                    Dramatical res business you member developer productivate
                    bricks architeh landing designer process improvents
                    nastional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chose us content text */}
      </div>
    </div>
  );
};

export default ChooseUs;
