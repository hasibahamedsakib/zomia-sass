import { useLocation } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import TeamMember from "./TeamMember";
const MeetOurTeam = () => {
  let location = useLocation();
  return (
    <div className=" pb-5 py-5  lg:py-16 p-3 md:p-5 text-center">
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
            <TeamMember /> <TeamMember />
          </>
        ) : (
          <TeamMember />
        )}
      </div>
    </div>
  );
};

export default MeetOurTeam;
