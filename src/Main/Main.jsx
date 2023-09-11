import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
// import Navbar from "../Components/Navbar/Navbar";
import NavBarDemo from "../Components/Navbar/NavBarDemo";

const Main = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavBarDemo />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
