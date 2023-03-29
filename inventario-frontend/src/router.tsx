import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import About from "./pages/About";

export default createBrowserRouter([homeRoutes(), aboutRoutes()]);

function aboutRoutes() {
  return {
    path: "/about",
    element: <DefaultLayout title="Acerca de" />,
    children: [
      {
        index: true,
        element: <About />,
      },
    ],
  };
}

function homeRoutes() {
  return {
    path: "/",
    element: <DefaultLayout title="Inicio" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  };
}
