import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ShowProduct from "./components/ShowProduct/ShowProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowProduct></ShowProduct>,

    children: [
      {
        path: "/",
        element: <ShowProduct></ShowProduct>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
