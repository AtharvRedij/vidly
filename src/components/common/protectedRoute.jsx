import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";

const ProtectedRoute = ({ path, componet: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        if (getCurrentUser()) {
          return Component ? <Component {...props} /> : render(props);
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
