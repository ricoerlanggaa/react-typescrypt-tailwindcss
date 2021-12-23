import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Home from "../views/pages/Home";
import Error404 from "../views/errors/Error404";

const Routes: React.FC = (): JSX.Element => {
  const homeRoutes = {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "*", element: <Navigate to="/error-404" /> },
      { path: "/", element: <Home /> },
      { path: "/error-404", element: <Error404 /> }
    ]
  };

  const routing = useRoutes([homeRoutes]);

  return <>{routing}</>;
};

export default Routes;
