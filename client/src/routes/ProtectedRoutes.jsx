import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex items-center justify-center mb-28">
        <progress className="progress w-56 absolute "></progress>;
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace={true} ></Navigate>;
};

export default ProtectedRoutes;
