import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Hungery from "./Pages/FullDetails/Hungery.jsx";
import Switzerland from "./Pages/FullDetails/Switzerland.jsx";
import Thailand from "./Pages/FullDetails/Thailand.jsx";
import Error404 from "./Pages/Error404.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/hungery",
        element: <Hungery />,
      },
      {
        path: "/switzerland",
        element: <Switzerland />,
      },
      {
        path: "/thailand",
        element: <Thailand />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
