import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Team from "../Pages/Team/Team";
import Faq from "../Pages/Faq/Faq";
import Contact from "../Pages/Contact/Contact";
import BlogList from "../Pages/BlogList/BlogList";
import BlogGrid from "../Pages/BlogGrid/BlogGrid";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUpPage from "../Pages/SignupPage/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        element: <Contact />,
      },
      {
        path: "blog_list",
        element: <BlogList />,
      },
      {
        path: "blog_grid",
        element: <BlogGrid />,
      },
      {
        path: "blog_details",
        element: <BlogDetails />,
      },
      {
        path: "login",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
