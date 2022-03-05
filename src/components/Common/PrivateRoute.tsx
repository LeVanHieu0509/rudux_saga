
import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';


export default function PrivateRoute (props:  RouteProps) {
    //check user is logged in
    //show route
    //rediract login page
    const accessToken = Boolean(localStorage.getItem('access_token')); 
    console.log("accessToken is:",accessToken)
  return <Route {...props}/>;

}
