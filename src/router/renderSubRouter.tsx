import React from "react";
import { Route } from "react-router-dom";
import { route } from "./interface";

interface IProps {
  route: route;
}

export const RenderSubRouter = (route: IProps) => {
  return (
    <Route
      key={route.route.path}
      path={route.route.path}
      component={route.route.component}
      exact={true}
    />
  );
};
