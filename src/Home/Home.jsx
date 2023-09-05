import DesktopApplications from "../Components/DesktopApplications/DesktopApplications";
import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar";
import OurProcess from "../Components/Our_Process/OurProcess";
import WebSiteAndApps from "../Components/WebSitesAndApps/WebSiteAndApps";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurProcess />
      <WebSiteAndApps />
      <DesktopApplications />
    </>
  );
};

export default Home;
