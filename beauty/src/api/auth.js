import axios from './axios';

// Todas las rutas deben incluir `/auth/` porque en app.js usas:
// app.use("/api/auth", authRoutes);

export const registerRequest = (user) => axios.post('/auth/register', user);
export const loginRequest = (user) => 
  axios.post(`/auth/login`, user, { withCredentials: true });
export const getProfileRequest = () =>
  axios.get('/auth/verify', { withCredentials: true });
