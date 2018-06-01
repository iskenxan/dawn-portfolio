import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = (props) =>{
  const { loggedIn, renderComponent } = props;
  return(
    <Route
      render={() =>
         loggedIn ? (
          <Route component={renderComponent} />
          ) : (
          <Redirect
            to="/gallery"
          />
          )
      }
    />
  );
}

export default PrivateRoute;
