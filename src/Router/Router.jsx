import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Components/About_Us/About";
import Main from "../Main/Main";
import Description from "../Components/Description/Description";
import DesktopApplications from "../Components/DesktopApplications/DesktopApplications";
import OurOffer from "../Components/Our_Offer/OurOffer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <>Error is hear</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: (
          <>
            <Description />
            <DesktopApplications />
          </>
        ),
      },
      {
        path: "contact",
        element: <OurOffer />,
      },
    ],
  },
]);

export default router;
