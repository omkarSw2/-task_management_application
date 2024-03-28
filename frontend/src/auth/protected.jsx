import { Navigate } from "react-router-dom";

const authToken = localStorage.getItem("token");
const PrivateRoute = ({ children }) => {
  return authToken.length ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
