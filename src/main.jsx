import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./portfolio/Portfolio.jsx";
import AnimateComponent from "./components/AnimateComponent.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AnimateComponent key="home">
            <ProtectedRoute>
              <div>About</div>
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/experience",
        element: (
          <AnimateComponent key="exp">
            <ProtectedRoute>
              <div>Experience</div>
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <AnimateComponent key="portfolio">
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
