import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  //spinner if loading
  if (loading) {
    return (
      <div className="flex justify-center">
        <button className="btn text-5xl bg-white text-black loading my-40"></button>
      </div>
    );
  }
  //navigation
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
