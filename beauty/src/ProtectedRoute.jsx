// beauty/src/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from './context/AuthContext';

function ProtectedRoute() {
  const { isAuthenticated, user } = useAuth();

   if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoute;
