import { Navigate } from "react-router-dom";

const ProteccionRutas = ({ usuarioLogueado, children }) => {
  if (!usuarioLogueado) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProteccionRutas;
