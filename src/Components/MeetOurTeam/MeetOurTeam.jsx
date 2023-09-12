import { useLocation } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import TeamMember from "./TeamMember";

const MeetOurTeam = () => {
  let location = useLocation();
  return (
    <div className="py-10 md:py-16  lg:py-16 p-3 md:p-5 text-center">
      <div className="Container">
        {/* section heading */}
        <div className="flex items-center flex-col space-y-4 ">
          <SectionTitle text="Meet Our Team" isBoth={true} />
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-subTitle-0 font-bold">
            We Have Lots Of Experience <br />
            Team Members
          </h1>
        </div>
        {location.pathname == "/team" ? (
          <>
            <div className="Container grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 py-10 md:pt-16 md:pb-10  gap-7">
              {/* meet Our team */}
              <TeamMember />
              <TeamMember />
            </div>
          </>
        ) : (
          <div className="Container grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 py-10 md:pt-16 md:pb-10 gap-7">
            {/* meet Our team */}
            <TeamMember />
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetOurTeam;
