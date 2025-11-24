import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
 if (loading) {
    // Show a spinner or blank screen while Firebase checks session
    return <div className='min-h-screen mx-auto flex justify-center items-center'>
        <span className="loading loading-spinner text-primary"></span>
    </div> ;
  }
  if (user?.email) {
    return children;
  }

  // Redirect to login and store the current page in state
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
