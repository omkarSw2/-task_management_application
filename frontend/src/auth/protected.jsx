import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem("token");
  const isAuthenticated = authToken && authToken.length > 0;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
