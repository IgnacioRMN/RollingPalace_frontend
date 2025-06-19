import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ usuarioLogueado, children }) => {
  if (!usuarioLogueado) {
    return <Navigate to="/iniciar-sesion" replace />;
  }
  return children;
};

export default ProtectedRoute;
