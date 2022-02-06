import React, { useContext } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from '../../App';
const PrivateRoute = () => {
  const [loggedInUser] = useContext(UserContext) 
  return  loggedInUser ? <Outlet /> : <Navigate to="login" replace={true} />;
};

export default PrivateRoute;
