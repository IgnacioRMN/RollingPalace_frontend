const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Función genérica para realizar peticiones
const fetchAPI = async (
  endpoint,
  metodo = "GET",
  cuerpo = null,
  token = null
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  // Si no se pasa token explícitamente, intenta obtenerlo de localStorage
  if (!token) {
    token = localStorage.getItem("token");
  }
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    method: metodo,
    headers,
  };

  if (cuerpo) {
    config.body = JSON.stringify(cuerpo);
  }

  try {
    const respuesta = await fetch(`${API_URL}${endpoint}`, config);

    if (!respuesta.ok) {
      const errorData = await respuesta.json();
      throw new Error(errorData.message || "Error en la solicitud");
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error en API:", error.message);
    throw error;
  }
};

// ==================== AUTENTICACIÓN ====================
export const registrarUsuario = (datosUsuario) => {
  return fetchAPI("/auth/register", "POST", datosUsuario);
};

export const iniciarSesion = (credenciales) => {
  return fetchAPI("/auth/login", "POST", credenciales);
};

// ==================== USUARIOS ====================
export const obtenerUsuarios = (token) => {
  return fetchAPI("/usuarios", "GET", null, token);
};

export const actualizarUsuario = (id, datosUsuario, token) => {
  return fetchAPI(`/usuarios/${id}`, "PUT", datosUsuario, token);
};

export const eliminarUsuario = (id, token) => {
  return fetchAPI(`/usuarios/${id}`, "DELETE", null, token);
};

// ==================== HABITACIONES ====================
export const crearHabitacion = (datosHabitacion, token) => {
  return fetchAPI("/habitaciones", "POST", datosHabitacion, token);
};

export const obtenerHabitaciones = () => {
  return fetchAPI("/habitaciones");
};

export const obtenerHabitacionPorId = (id) => {
  return fetchAPI(`/habitaciones/${id}`);
};

export const actualizarHabitacion = (id, datosHabitacion, token) => {
  return fetchAPI(`/habitaciones/${id}`, "PUT", datosHabitacion, token);
};

export const eliminarHabitacion = (id, token) => {
  return fetchAPI(`/habitaciones/${id}`, "DELETE", null, token);
};
