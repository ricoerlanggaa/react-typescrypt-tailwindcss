import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Home Layout</h1>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
