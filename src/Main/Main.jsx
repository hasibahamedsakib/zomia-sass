import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
// import Navbar from "../Components/Navbar/Navbar";
import NavBarDemo from "../Components/Navbar/NavBarDemo";
import ScrollToTop from "../ScrollToTop";

const Main = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Navbar /> */}
      <NavBarDemo />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default Main;
