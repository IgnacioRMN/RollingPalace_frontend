import { Link, NavLink } from 'react-router-dom';

const BarraNavegacion = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Rolling Palace</Link>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/catalogo"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
            }
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/iniciar-sesion"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
            }
          >
            Iniciar Sesión
          </NavLink>
          <NavLink
            to="/registrarse"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
            }
          >
            Registrarse
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;