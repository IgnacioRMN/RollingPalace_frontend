const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Función genérica para realizar peticiones
const fetchAPI = async (
  endpoint,
  method = "GET",
  body = null,
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
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error en la solicitud");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

// ==================== AUTH ====================
export const registerUser = (userData) => {
  return fetchAPI("/auth/register", "POST", userData);
};

export const login = (credentials) => {
  return fetchAPI("/auth/login", "POST", credentials);
};

// ==================== USUARIOS ====================
export const getUsers = (token) => {
  return fetchAPI("/usuarios", "GET", null, token);
};

export const updateUser = (id, userData, token) => {
  return fetchAPI(`/usuarios/${id}`, "PUT", userData, token);
};

export const deleteUser = (id, token) => {
  return fetchAPI(`/usuarios/${id}`, "DELETE", null, token);
};

// ==================== HABITACIONES ====================
export const crearHabitacion = (roomData, token) => {
  return fetchAPI("/habitaciones", "POST", roomData, token);
};

export const obtenerHabitaciones = () => {
  return fetchAPI("/habitaciones");
};

export const obtenerHabitacionesId = (id) => {
  return fetchAPI(`/habitaciones/${id}`);
};

export const ActualizarHabitacion = (id, roomData, token) => {
  return fetchAPI(`/habitaciones/${id}`, "PUT", roomData, token);
};

export const eliminarHabitacion = (id, token) => {
  return fetchAPI(`/habitaciones/${id}`, "DELETE", null, token);
};
