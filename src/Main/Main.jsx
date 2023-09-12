import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
// import Navbar from "../Components/Navbar/Navbar";
import NavBar from "../Components/Navbar/NavBar";
import ScrollToTop from "../ScrollToTop";

const Main = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Navbar /> */}
      <NavBar />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default Main;
