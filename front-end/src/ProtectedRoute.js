import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const getAuth = () => {localStorage.getItem('token')};
const ProtectedRoute = ({component : Component, auth = {getAuth}, ...rest}) => {
  console.log(auth)
  return(
    <Route {...rest} render={(props) => auth ?  <Component {...props}/>: 
    <Redirect to={{pathname: '/NoAccess', state: {from: props.location}}} />}
    />
    )
  }

export default ProtectedRoute;