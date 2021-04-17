import React from "react";
import { Route, Redirect } from "react-router-dom"
import { auth } from "./firebase";

export const ProtectedRoute = ({component: Component, ...rest}) => {
 const user = auth.currentUser;

  return(
    <Route {...rest} render={
      (props) => {
        if(user){
        return <Component {...props}/>
        }else {
          return <Redirect to={{
            pathname: "/",
            state: {
              from: props.location
          }
        }}
       />
      }
    }
  } /> )
}
