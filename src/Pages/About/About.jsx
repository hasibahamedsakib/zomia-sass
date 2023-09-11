import Blog from "../../Components/Blog/Blog";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import MeetOurTeam from "../../Components/MeetOurTeam/MeetOurTeam";
import OurProcess from "../../Components/Our_Process/OurProcess";
// import OwlCarousel from "../../Components/OwlCarusal/OwlCarousel";

import CarouselSlider from "../../Components/OwlCarusal/OwlCarousel";
import WebSiteAndApps from "../../Components/WebSitesAndApps/WebSiteAndApps";

const About = () => {
  return (
    <>
      <div className="bg-[url('/photo/bg3-1.jpg')] bg-center py-20 lg:py-44 bg-cover text-center">
        <div className="text-white Container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            About Us
          </h1>
          <Breadcrumb text="About Us" />
        </div>
      </div>
      {/* Our Process  */}
      <OurProcess />
      {/* Website and apps */}
      <WebSiteAndApps />
      {/* Meet Our Team */}
      <MeetOurTeam />
      {/* Our Latest Blog Section */}
      <Blog />
      {/* carousel Slider */}
      <CarouselSlider />
    </>
  );
};

export default About;
