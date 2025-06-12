import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, getProfileRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      setErrors([]);
      const res = await registerRequest(user);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response?.data || ['Error desconocido']);
    }
  };

  const signin = async (user) => {
    try {
      setErrors([]);
      const res = await loginRequest(user);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response?.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response?.data?.message || 'Error desconocido']);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    setIsAuthenticated(false);
    setErrors([]);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => setErrors([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      getProfileRequest()
        .then(res => {
          setUser(res.data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          setUser(null);
          setIsAuthenticated(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signin, logout, user, isAuthenticated, errors, setErrors }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
