// src/content/PrivateRoute/PrivateRoute.tsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean; // Replace with actual authentication state
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  isAuthenticated,
  redirectTo = '/login',
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <Route element={element} />;
};

export default PrivateRoute;
