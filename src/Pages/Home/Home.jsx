import Blog from "../../Components/Blog/Blog";
import DesktopApplications from "../../Components/DesktopApplications/DesktopApplications";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Meeting from "../../Components/Meeting/Meeting";
import OurOffer from "../../Components/Our_Offer/OurOffer";
import OurProcess from "../../Components/Our_Process/OurProcess";
import Testimonials from "../../Components/Testimonials/Testimonials";
import WeAreWorking from "../../Components/We_Are_Working/WeAreWorking";
import WebSiteAndApps from "../../Components/WebSitesAndApps/WebSiteAndApps";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurProcess />
      <WebSiteAndApps />
      <DesktopApplications />
      <OurOffer />
      <Meeting />
      <Testimonials />
      <Blog />
      <WeAreWorking />
    </>
  );
};

export default Home;
