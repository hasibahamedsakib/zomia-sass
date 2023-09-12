import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import MeetOurTeam from "../../Components/MeetOurTeam/MeetOurTeam";
import CarouselSlider from "../../Components/OwlCarusal/OwlCarousel";

const Team = () => {
  return (
    <>
      <div className="bg-[url('/photo/bg3-1.jpg')] bg-center py-20 lg:py-44 bg-cover text-center">
        <div className="text-white Container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Team Member
          </h1>
          <Breadcrumb text="Team Member" />
        </div>
      </div>
      {/* Team  */}

      {/* meet Our team */}
      <MeetOurTeam />

      <CarouselSlider />
    </>
  );
};

export default Team;
