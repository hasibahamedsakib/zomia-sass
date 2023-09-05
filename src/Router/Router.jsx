import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <>Error is hear</>,
  },
]);

export default router;
