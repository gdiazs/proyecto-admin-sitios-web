import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import router from "./router";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./theme.css";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
  </React.StrictMode>
);
