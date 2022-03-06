import * as React from "react";
import { RouteProps, Outlet, Navigate } from "react-router-dom";


export default function PrivateRoute(props: RouteProps) {
  //check user is logged in
  //show route
  //rediract login page
  const accessToken = Boolean(localStorage.getItem("access_token"));
  console.log("accessToken is:", accessToken);
  return accessToken ? <Outlet /> : <Navigate to="/login" />;

}
