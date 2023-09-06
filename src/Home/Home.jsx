import DesktopApplications from "../Components/DesktopApplications/DesktopApplications";
import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar";
import OurOffer from "../Components/Our_Offer/OurOffer";
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
      <OurOffer />
    </>
  );
};

export default Home;
