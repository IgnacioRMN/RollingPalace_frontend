import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ usuarioLogueado, children }) => {
  if (!usuarioLogueado) {
    return <Navigate to="/iniciar-sesion" replace />;
  }
  return children;
};

export default RutasProtegidas;
