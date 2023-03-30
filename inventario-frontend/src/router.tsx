import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import ProductsIndex from "./pages/products/Index";

export default createBrowserRouter([homeRoutes(), aboutRoutes()]);

function aboutRoutes() {
  return {
    path: "/products",
    element: <DefaultLayout title="Productos" />,
    children: [
      {
        index: true,
        element: <ProductsIndex />,
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
