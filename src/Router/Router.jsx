import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import OurOffer from "../Components/Our_Offer/OurOffer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";

import Team from "../Pages/Team/Team";
import Faq from "../Pages/Faq/Faq";

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
        element: <Service />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "contact",
        element: <OurOffer />,
      },
    ],
  },
]);

export default router;
